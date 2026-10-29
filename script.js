// Json reading
import data from "./songs.json" with { type: "json" };
console.log(data); 

const list = document.getElementById("song-list");

data.forEach(song => {
    list.innerHTML += `<li>${song.title} by ${song.artist}</li>`;
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
let Songs = [];
let index = 0;

const username = "Jules9489";
const repo = "Jukebox-project";
const folderPath = "Songs"; 
const player = document.getElementById("player");
const title = document.getElementById("title");


async function loadDynamicPlaylist() {
    try {
        const response = await fetch(`https://github.com{username}/${repo}/contents/${folderPath}`);
        const files = await response.json();
        
        // Filter out only mp3 files and map them into the array
        songs = files
            .filter(file => file.name.endsWith(".mp3"))
            .map(file => file.name);

        if (songs.length > 0) {
            playSong(); // Queue and play the first track automatically
        }
    } catch (error) {
        console.error("Error reading folder dynamically:", error);
    }
};

function playSong() {
    const currentfile = Song[index];

    player.src = URL.createObjectURL(currentfile);
    title.innerText = "playing: " + currentfile.name;
    player.Play();
};

document.querySelector("Next").onclick = function() {
    if (index < Songs.length - 1 ) {
        index++;
        playSong();
    }
};

document.querySelector("Previous").onclick = function() {
    if (index > 0) {
        index--;
        playSong();
    }
};

player.onended = function() {
    if (index < song.length - 1) {
        index++;
        playSong();
    }
};
