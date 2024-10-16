function validateEmail(email) {
  const emailRules = /\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/;
  if (!email.match(emailRules)) {
    const err = new Error("e-mail inválido");
    err.input = "email";
    throw err;
  }
}

const userInputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).innerText = err.message;
  }
});
