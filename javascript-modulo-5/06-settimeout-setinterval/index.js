/**
 * setTimeout => função global do JS
 * Temporizador
 * ((handler/callback), quantidade de tempo em milisegundos)
 * criar um tempo de espera
 * pode armazenar o id do método
 * =================================================================
 * setInterval
 * \_> Função que vai executar determinado bloco de código em x tempo e também pode armazenar o id
 */

console.log("Programa iniciado...");

//-----------------------------------------------SET TIMEOUT-----------------------------------------------

// conta até 3s e executa o bloco
setTimeout(() => {
  console.log("Se passaram 3 segundos")
}, 1000 * 3) // 1000 -> 1s em ms * 3s

// ---------------------------------------------SET INTERVAL-----------------------------------------------
let seconds = 0;

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos...`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log(`Programa encerrado em ${seconds} segundos`);
  }
}, 1000 * 3);
//----------------------------------------------------------------------------------------------------------