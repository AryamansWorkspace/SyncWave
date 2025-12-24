function getListenedSongs() {
  const data = localStorage.getItem("listenedSongs");
  return data ? JSON.parse(data) : [];
}

function markSongListened(songId) {
  const listened = getListenedSongs();
  if (!listened.includes(songId)) {
    listened.push(songId);
    localStorage.setItem("listenedSongs", JSON.stringify(listened));
  }
}

window.addEventListener("song:listened", () => {
  markSongListened(1);
});
