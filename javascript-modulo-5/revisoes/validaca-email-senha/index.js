function validateEmail(email) {
  const emailRules = /\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/;
  if (!email.match(emailRules)) {
    const err = new Error("E-mail inválido");
    err.input = "email";
    throw err;
  }
}

function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/\d/) ||
    !password.match(/[^a-zA-Z\s0-9]/)
  ) {
    const err = new Error("Senha inválida");
    err.input = "password";
    throw err;
  }
}

function resetForm(input) {
  Object.entries(input).forEach(([key, value]) => {
    value.classList.remove("success", "error");
    document.querySelector(`#${key}-error`).textContent = "";
  });
}

const inputsEntries = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  try {
    inputsEntries.name.classList.add("success");
    validateEmail(inputsEntries.email.value);
    inputsEntries.email.classList.add("success");
    validatePassword(inputsEntries.password.value);
    inputsEntries.password.classList.add("success");
  } catch (error) {
    inputsEntries[error.input].classList.add("error");
    document.querySelector(`#${error.input}-error`).textContent = error.message;
  }
});
