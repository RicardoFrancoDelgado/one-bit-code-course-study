function validateEmail(email) {
  /**
   * /\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/ => qualquer caractere incluindo underscore sendo pelo menos 2, antes de um @
   * depois qualquer caractere de a-z e A-Z sendo pelo menos 2 escapando um ponto e qualquer caractere de a-z e A-Z sendo,
   * pelo menos 2 também -> ex: aa@aa.aa
   */

  const emailRules = /\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/;

  if (!email.match(emailRules)) {
    const err = new Error("e-mail inválido"); //armazenando em err => a classe Error com a mensagem
    err.input = "email"; //atribuindo o input do erro no caso o campo de email
    throw err; //lançando o erro
  }
}

function validatePassword(password) {
  const minLength = 8; // regras de tamanho
  const hasUppercase = /[A-Z]/; // regras de maiusculo
  const hasLowercase = /[a-z]/; // regras de minusculo
  const hasNumber = /\d/; // regras de numero
  const hasSpecialCaracter = /[^a-zA-Z\s0-9]/; // regra de qualquer caractere especial invertendo com o ^

  if (
    password.length < minLength ||
    !password.match(hasUppercase) ||
    !password.match(hasLowercase) ||
    !password.match(hasNumber) ||
    !password.match(hasSpecialCaracter)
  ) {
    const err = new Error("senha inválida");
    err.input = "password";
    throw err;
  }
}

function resetFormStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove("success", "error");
    document.querySelector(`#${key}-error`).innerText = "";
  });
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
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).innerText = err.message;
  }
});
