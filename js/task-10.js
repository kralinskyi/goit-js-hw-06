const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const basicSize = 30;
  let size = basicSize;
  let boxesMarkup = "";
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }
  boxes.insertAdjacentHTML("beforeend", boxesMarkup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(document.querySelector("#controls input").value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  input.value = "";
});
