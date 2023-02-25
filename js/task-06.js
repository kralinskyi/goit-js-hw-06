const inputEl = document.querySelector("#validation-input");

const validationInput = () => {
  const requiredLength = parseInt(inputEl.dataset.length, 10);
  const currentLength = inputEl.value.trim().length;

  if (currentLength === requiredLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", validationInput);
