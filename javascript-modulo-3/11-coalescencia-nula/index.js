/**
 * um operador lógico
 * retorna o seu operando do lado direito quando o seu operador do
 * lado esquerdo é null ou undefined
 * caso contrario, ele retorna seu operando do lado esquerdo.
 *
 * "??" => como utilizar
 *
 */

// const a = 0 // retorna false
// const b = null // retorna false
// const c = 'Teste' // retorna true

// console.log(a || b || c)

// console.log(b ?? c)
// console.log(a ?? b ?? c)

let a = 0
let b = a || 42

console.log({ a, b })

b = a ?? 42
console.log({ a, b })
