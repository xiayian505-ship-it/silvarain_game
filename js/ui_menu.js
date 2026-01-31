document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("achievementBtn");
  const sub = document.getElementById("achievementSub");

  btn.addEventListener("click", () => {
    sub.classList.toggle("open");

    // 箭頭方向切換
    btn.textContent = sub.classList.contains("open") ? "成就 ▾" : "成就 ▸";
  });
});

function goStory(){
  window.location.href = "story.html";
}