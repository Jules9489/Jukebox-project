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

const folderPicker = document.getElementById("folderPicker");
const player = document.getElementById("player");
const title = document.getElementById("title");


folderPicker.onchange = function(event) {
    const allfiles = Array.from(event.target.files);

    Songs = allfiles.filter(file => file.name.endswith(".mp3"));

    if (Songs.length > 0) {
        index = 0;
        playSong();
    } else{
        title.innnerText = "No files found";
    }
};

function playSong() {
    const currentfile = Song[index];

    player.src = URL.createObjectURL(currentfile);
    title.innerText = "playing: " + currentfile.name;
    player.Play();
}

document.getElementById("Next").onclick = function() {
    if (index < Songs.length - 1 ) {
        index++;
        playSong();
    }
};

document.getElementById("Previous").onclick = function() {
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
