const inputEl = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector("#boxes");
let elements = [];

renderBtn.addEventListener("click", () => {
  const amount = parseInt(inputEl.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const item = document.createElement("div");
    item.style.width = `${width}px`;
    item.style.height = `${height}px`;
    item.style.backgroundColor = `rgb(${random(0, 255)}, ${random(
      0,
      255
    )}, ${random(0, 255)})`;
    width += 10;
    height += 10;
    elements.push(item);
  }

  boxesEl.append(...elements);
}
