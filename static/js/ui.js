document.addEventListener("DOMContentLoaded", () => {
  const moodButtons = document.querySelectorAll(".mood-btn");

  moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mood = btn.dataset.mood;
      localStorage.setItem("currentMood", mood);
      localStorage.setItem("isFirstTime", "false");
      window.location.href = "/";
    });
  });
});