document.addEventListener("DOMContentLoaded", () => {
  const moodEl = document.getElementById("current-mood");
  const analyzeBtn = document.getElementById("analyze-btn");
  const moodBtns = document.querySelectorAll(".mood-btn");

  if (moodEl) {
    const mood = localStorage.getItem("currentMood");
    moodEl.textContent = mood ? mood : "Not set";
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      localStorage.setItem("lastAnalyzedAt", Date.now().toString());
      window.location.href = "/";
    });
  }

  moodBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mood = btn.dataset.mood;
      localStorage.setItem("currentMood", mood);
      localStorage.setItem("isFirstTime", "false");
      window.location.href = "/";
    });
  });
});