const nameImnputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameImnputEl.addEventListener("input", () => {
  nameOutputEl.textContent = nameImnputEl.value.trim() || "Anonymous";
});
