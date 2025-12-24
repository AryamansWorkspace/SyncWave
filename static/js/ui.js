document.addEventListener("DOMContentLoaded", () => {
  const moodEl = document.getElementById("current-mood");
  const analyzeBtn = document.getElementById("analyze-btn");
  const moodBtns = document.querySelectorAll(".mood-btn");
  const historyList = document.getElementById("history-list");

  if (moodEl) {
    const mood = localStorage.getItem("currentMood");
    moodEl.textContent = mood ? mood : "Not set";
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      const mood = localStorage.getItem("currentMood");
      if (!mood) return;
      const history = JSON.parse(localStorage.getItem("moodHistory") || "[]");
      history.unshift({ mood, time: Date.now() });
      localStorage.setItem("moodHistory", JSON.stringify(history.slice(0, 14)));
      window.location.href = "/history";
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

  if (historyList) {
    const history = JSON.parse(localStorage.getItem("moodHistory") || "[]");
    history.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.mood} • ${new Date(item.time).toLocaleString()}`;
      historyList.appendChild(li);
    });
  }
});