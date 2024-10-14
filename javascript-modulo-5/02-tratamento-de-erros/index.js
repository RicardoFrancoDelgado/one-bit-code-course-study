function sum(a, b) {
  const firstNum = Number(a);
  const secondNum = Number(b);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    throw new Error("Arguments needs to be a number"); // lançar um novo erro
    // throw => lançar
  }

  return firstNum + secondNum;
}

// bloco try, catch, finally

try {
  // bloco try precisa do catch ou do finally não pode ser executado sozinho
  console.log(sum(2, 5));
  console.log(sum(2, 9));
  // console.log(sum(undefined, 5)); // throw => undefined not be parsed a number
  console.log(sum(2, null));
  // console.log(sum(2, "dois"));
  console.log(sum(2, "2"));
} catch (error) {
  // podemos usar parametros para capturar o erro como um evento
  console.log("Un error ocorred");
  // console.log(error); // isso vai lançar o erro principal definido do throw new Error
  console.log(error.message); // .message captura somente a mensage do erro passando ela no console caso queira exibir para o usuário
} finally {
  console.log("Program execution completed"); // semepre é executado no bloco possívelmente usado para mensagem de finalização de programa
}
