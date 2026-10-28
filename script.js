import data from "./songs.json" with { type: "json" };
console.log(data); 

const list = document.getElementById("song-list");

data.forEach(song => {
    list.innerHTML += `<li>${song.title} by ${song.artist}</li>`;
});
