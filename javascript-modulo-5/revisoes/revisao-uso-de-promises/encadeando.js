function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (!age) {
      // se não tem idade lançamos um erro
      reject(new Error("age is required"));
    } else {
      resolve(age > 18); // se tem idade assumimos ser maior que 18
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (!birthday) {
      // se não tem aniversário lançamos um erro
      reject(new Error("birthday is required"));
    } else {
      // se tem pegamos a data de nascimento coletando o ano e a data atual também coletando o ano
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear); // resolvemos a promise retornando o ano atual - o ano de nascimento
    }
  });
}

// encadeando as promises
getAge("2000-06-20")
  .then((age) => checkAge(age))
  .then((isOver18) => {
    if (!isOver18) {
      console.log("Menor de idade");
    } else {
      console.log("Maior de idade");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
