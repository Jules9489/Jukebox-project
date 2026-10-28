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
    audio.play
});

Pausebuttonbutton.addEventListener("click", () => {
    audio.pause
});

console.log(audio);

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("Value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var colour = "linear-gradient(90deg, black " + x + "%, gray " + x + "%";
    slider.style.background = colour;
});