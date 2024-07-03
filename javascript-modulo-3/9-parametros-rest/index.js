/**
 * Técnica que permite que um função recebe qualquer número de parâmetros
 * manipular parâmetros como um array
 * 
 * arguments => alternativo para parametros
 * 
 * trabalhamos com parâmetros rest no final da função
 */

function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2, 2, 2))
console.log(sum(32, 5, 63))