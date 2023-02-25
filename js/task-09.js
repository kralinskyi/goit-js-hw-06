const widgetEl = document.querySelector(".widget");
const colorSpanEl = widgetEl.querySelector(".color");
const changeColorBtn = widgetEl.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpanEl.textContent = newColor;
}

changeColorBtn.addEventListener("click", changeBackgroundColor);
