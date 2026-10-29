import { createClient } from
    "https://esm.sh/@supabase/supabase-js@2";

// Json reading
let Songs = [];
let index = 0;

import data from "./songs.json" with { type: "json" };
console.log(data); 

const list = document.getElementById("song-list");

data.forEach(song => {
    list.innerHTML += `<li>${song.title} by ${song.artist}</li>`;
    Songs.push(`${song.artist} - ${song.title}.mp3`);
});

// Audio
const audio = document.querySelector("audio");

const Playbutton = document.querySelector(".play");
const Pausebutton = document.querySelector(".pause");

Playbutton.addEventListener("click", () => {
    audio.play();
});

Pausebutton.addEventListener("click", () => {
    audio.pause();
});

console.log(audio);

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var colour = "linear-gradient(90deg, black " + x + "%, gray " + x + "%)";
    slider.style.background = colour;

    audio.volume = x / 100;
});

// song choosing
const player = document.getElementById("myAudio");
const title = document.getElementById("title");

function playSong() {
    // Use your existing "audio" constant defined at the top of your file
    audio.src = "Songs/" + Songs[index]; 
    title.innerText = "Playing: " + Songs[index];
    audio.play().catch(e => console.log("Playback interaction required"));
};

if (Songs.length > 0) {
    playSong();
}

document.querySelector(".Next").onclick = function() {
    if (index < Songs.length - 1 ) {
        index++;
        playSong();
    }
};

document.querySelector(".Previous").onclick = function() {
    if (index > 0) {
        index--;
        playSong();
    }
};

audio.onended = function() {
    if (index < Songs.length - 1) {
        index++; 
        playSong();
    }
};

//supabase

const db = createClient(
    "https://ibfivsobbilqljducnug.supabase.co",
    "sb_publishable_PyVOsGtxNnFeyLnaXu0hDQ_tVmTb7F1"
)

const choice = document.getElementById("song-choice");
const queue = document.getElementById("shared-queue-list");

data.forEach(song => {
    choice.innerHTML += `<option value="${song.file}">${song.title} by ${song.artist}</option>`;
});

async function updateQueue() {
    const { data: songs } = await db.from("queue").select("*").order("id");

    queue.innerHTML = "";

    songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song.song_file;
        queue.appendChild(li);
    });
}

document.getElementById("add-to-queue").onclick = async () => {
    console.log("Button clicked!");
    console.log("Selected song:", choice.value);

    if (!choice.value) {
        alert("Choose a song first!");
        return;
    }

    const { error } = await db
        .from("queue")
        .insert({ song_file: choice.value });

    if (error) {
        alert("Supabase error: " + error.message);
        console.error(error);
        return;
    }

    alert("Song added!");
    updateQueue();
};
