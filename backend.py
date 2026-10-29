import os 
import json
from os import listdir


path = "Songs"
list = os.listdir(path)

filtered_list = [f for f in listdir("Songs") if f.endswith(".mp3")]
formatted_list = [
    {
        "title": f.split(" - ", 1)[1][:-4],
        "artist": f.split(" - ", 1)[0],
        "file": f
    }
    for f in filtered_list
    if " - " in f
]

with open("songs.json", "w") as outfile:
    json.dump(formatted_list, outfile)