async function calculateIMC(peso, altura) {
  return new Promise((resolve, reject) => {
    if (typeof peso !== "number" || typeof altura !== "number") {
      reject("A promise foi rejeitada");
    } else {
      const imc = peso / (altura * altura);
      resolve(imc);
    }
  });
}

async function showIMC(peso, altura) {
  try {
    const imc = await calculateIMC(peso, altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    let situacao;
    if (imc < 18.5) {
      situacao = "magreza";
    } else if (imc >= 18.5 && imc < 24.9) {
      situacao = "normal";
    } else if (imc >= 25 && imc < 29.9) {
      situacao = "sobrepeso";
    } else if (imc >= 30 && imc < 39.9) {
      situacao = "obesidade";
    } else {
      situacao = "obesidade grave";
    }

    console.log(`Situação ${situacao}`);
    console.log("Função assíncrona completada");
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

showIMC(75, 1.85);

// Exemplo de execução de código assíncrono após chamar a função
console.log(
  "Essa mensagem é exibida antes da função mostrarIMC ser resolvida."
);
