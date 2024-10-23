function media(nota1, nota2, nota3) {
  return new Promise((resolve, reject) => {
    if (
      // verificando se o tipo de dado é um number primitivo
      typeof nota1 !== "number" ||
      typeof nota2 !== "number" ||
      typeof nota3 !== "number"
    ) {
      reject("O tipo de dado precisa ser um número"); // mensagem de rejeicão da promise
    } else {
      const result = (nota1 + nota2 + nota3) / 3;
      resolve(result); // resultado da promise resolvida
    }
  });
}

function showMedia(nota1, nota2, nota3) {
  media(nota1, nota2, nota3) // chamando a função
    .then((media) => {
      // tratando a promise
      console.log(`Sua média final é: ${media.toFixed(2)}.`);

      // condicional das notas
      if (media <= 6) {
        console.log(`Você está abaixo da média.`);
      } else if (media >= 7 && media <= 9) {
        console.log(`Você está aprovado com média ${media.toFixed(2)}.`);
      } else if (media === 10) {
        console.log(
          `Você atingiu aprovação com nota máxima. Nota: ${media.toFixed(
            2
          )}. Parabéns!`
        );
      }
    })
    .catch((error) => {
      //  capturando erro
      console.log(error);
    });
}

showMedia(10, 10, 10); // nota maxima
showMedia(10, "sim", 10); // exibido no final pois os erros são capturados no final
showMedia(1, 4, 3); // abaixo da média
showMedia(6, 6, 6); // abaixo
showMedia(10, 3, 7); // passou

console.log("Resultado de suas notas..."); // é executado primeiro que as promises
