const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  formEl.reset();
}
