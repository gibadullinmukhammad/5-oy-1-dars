const count = document.getElementById("count");
const btn = document.getElementById("count-btn");
const subtractBtn = document.getElementById("subtract-btn"); // Ayirish tugmasi uchun
const resetBtn = document.getElementById("reset-btn");
const doubleBtn = document.getElementById("double-btn");
const showCountBtn = document.getElementById("show-count-btn"); // Yangi tugma uchun
const plusCountDisplay = document.getElementById("plus-count"); // + bosilgan sonni ko'rsatish

let plusClickCount = 0; // + bosishlar soni

console.log(count);
console.log(btn);

btn.addEventListener("click", () => {
    count.innerText++;
    plusClickCount++; // + tugmasi bosilganda hisoblab boradi
});

subtractBtn.addEventListener("click", () => {
    count.innerText = Math.max(0, count.innerText - 1); // Bitta ayirish, lekin 0 dan pastga tushmaydi
});

resetBtn.addEventListener("click", () => {
    count.innerText = "0";
    plusClickCount = 0; // Reset qilinganda hisobni ham 0 ga tushiramiz
});

doubleBtn.addEventListener("click", () => {
    count.innerText = parseInt(count.innerText) * 2; // 2 marta oshirish
});

showCountBtn.addEventListener("click", () => {
    plusCountDisplay.innerText = `${plusClickCount} marta + bosilgan`; // Bosilgan sonni ko'rsatadi
});
