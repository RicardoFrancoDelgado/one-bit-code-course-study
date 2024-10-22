function execute() {
  // faz alguma coisa...
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo resolvida");
    setTimeout(() => {
      if (false) {
        reject("A promise foi rejeitada");
      } else {
        console.log("Resolvendo a promise");
        resolve(42);
      }
    }, 2000);
  });
}

execute()
  .then((result) => {
    console.log(`A promise foi resolvida. Resultado ${result}`);
  })
  .catch((err) => {
    console.log(`A promise foi rejeitada: ${err}.`);
  })
  .finally(() => {
    console.log("A promise foi finalizada")
  })
