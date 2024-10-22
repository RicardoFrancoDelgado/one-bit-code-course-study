function calculateIMC(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("O tipo de largura e altura deve ser um número");
    } else {
      const imc = weight / (height * height);
      resolve(imc);
    }
  });
}

function showIMC(weight, height) {
  calculateIMC(weight, height)
    .then((result) => {
      console.log(`Seu IMC: ${result}`);

      if (result < 18.5) {
        console.log("Situação: magreza");
      } else if (result >= 18.5 && result < 24.9) {
        console.log("Situação: normal");
      } else if (result >= 25 && result < 29.9) {
        console.log("Situação: sobrepeso");
      } else if (result >= 30 && result < 39.9) {
        console.log("Situação: obesidade");
      } else {
        console.log("Situação: obesidade grave");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("Calculando...");
}

showIMC(75, 1.84);
showIMC(75, "oi");
showIMC(100, 1.84);
showIMC(50, 1.68);
showIMC(90, 2.03);
showIMC(90, 1.48);
