const nameImnputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameImnputEl.addEventListener("click", () => {
  nameOutputEl.textContent = nameImnputEl.value.trim() || "Anonymous";
});
