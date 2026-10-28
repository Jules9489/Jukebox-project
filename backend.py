import os 
import json
from os import listdir


path = "Songs"
list = os.listdir(path)

filtered_list = [f for f in listdir("Songs") if f.endswith(".mp3")]

with open("songs.json", "w") as outfile:
    json.dump(filtered_list, outfile)