// 🎭 立繪控制（測試用）
function showSprite(side, src){
  const el = document.getElementById(`sprite_${side}`);
  el.src = src;
  el.classList.add("show");
}

function hideSprite(side){
  document.getElementById(`sprite_${side}`).classList.remove("show");
}

// ✍️ 打字機效果（UI層）
function typeText(text, speed=25){
  const box = document.getElementById("textbox");
  box.textContent = "";
  let i = 0;
  const interval = setInterval(()=>{
    box.textContent += text[i];
    i++;
    if(i >= text.length) clearInterval(interval);
  }, speed);
}

// 🎬 對話框點擊動畫測試
document.addEventListener("DOMContentLoaded", ()=>{
  const box = document.getElementById("textbox");

  box.addEventListener("click", ()=>{
    typeText("這只是 UI 測試，未來會由故事引擎控制。");
  });

  // 測試立繪（之後由故事控制）
  setTimeout(()=>{
    showSprite("left","https://via.placeholder.com/300x600");
  },800);
});

document.addEventListener("DOMContentLoaded", ()=>{
  const next = document.getElementById("nextBtn");

  next.addEventListener("click", ()=>{
    typeText("這是 Next 按鈕的測試，未來會由故事引擎接管。");
  });
});

function goHome(){
  window.location.href = "./index.html";
}