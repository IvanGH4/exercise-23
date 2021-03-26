const textEl = document.querySelector("#name");
const text = "Joey Tribbiani";
const title = document.querySelector("#title");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");

setTimeout(() => {
  title.classList.add("active");
}, 500);

let idx = 1;

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  let timer = setTimeout(writeText, 200);
  if (idx > text.length) {
    clearTimeout(timer);
  }
}

writeText();

// function moveCircles() {
// }
setInterval(() => {
  let left1 = Math.floor(Math.random() * 300);
  let left2 = Math.floor(Math.random() * 250);
  let left3 = Math.floor(Math.random() * 200);
  let top1 = Math.floor(Math.random() * 200);
  let top2 = Math.floor(Math.random() * 150);
  let top3 = Math.floor(Math.random() * 100);

  circle1.style.left = `${left1}px`;
  circle2.style.left = `${left2}px`;
  circle3.style.left = `${left3}px`;
  circle1.style.top = `-${top1}px`;
  circle2.style.top = `-${top2}px`;
  circle3.style.top = `-${top3}px`;
}, 700);
