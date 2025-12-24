import json
import os

# Get absolute path of the project directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Path to data folder
DATA_DIR = os.path.join(BASE_DIR, "data")


def load_songs():
    """
    Loads and returns the list of songs from songs.json
    """
    songs_path = os.path.join(DATA_DIR, "songs.json")

    if not os.path.exists(songs_path):
        return []

    with open(songs_path, "r", encoding="utf-8") as file:
        return json.load(file)


def load_moods():
    """
    Loads and returns mood mappings from moods.json
    """
    moods_path = os.path.join(DATA_DIR, "moods.json")

    if not os.path.exists(moods_path):
        return {}

    with open(moods_path, "r", encoding="utf-8") as file:
        return json.load(file)
