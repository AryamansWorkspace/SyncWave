const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");

async function loadAndPlay() {
  const res = await fetch("/api/songs");
  const songs = await res.json();
  if (!songs.length) return;
  if (!songs[0].preview_url) return;
  audio.src = songs[0].preview_url;
  audio.play();
}

if (playBtn) {
  playBtn.addEventListener("click", loadAndPlay);
}
