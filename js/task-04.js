const counter = {
  value: 0,
  step: 1,
  increment() {
    this.value += this.step;
  },
  decrement() {
    this.value -= this.step;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

function updateCounterValue() {
  valueEl.textContent = counter.value;
}

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
  counter.increment();
  updateCounterValue();
});
