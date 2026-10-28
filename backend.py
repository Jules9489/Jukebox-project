import os 
import json
from os import listdir


path = "Songs"
list = os.listdir(path)

filtered_list = [f for f in listdir("Songs") if f.endswith(".mp3")]
formatted_list = [{"title": f.split(" - ")[1].replace(".mp3", ""), "artist": f.split(" - ")[0]} for f in filtered_list]

with open("songs.json", "w") as outfile:
    json.dump(formatted_list, outfile)