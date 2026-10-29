// Json reading
let Songs = [];
let index = 0;

import data from "./songs.json" with { type: "json" };
console.log(data); 

const list = document.getElementById("song-list");

data.forEach(song => {
    list.innerHTML += `<li>${song.title} by ${song.artist}</li>`;
    Songs.push(song.file);
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