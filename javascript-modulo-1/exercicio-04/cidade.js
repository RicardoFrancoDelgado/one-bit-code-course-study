// Visitando Novas Cidades
// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

// const nome = prompt('Informe seu nome:')
// let visitouCidade = prompt('Já visitou alguma cidade? (sim/não)')
// let cidade = ''
// let acumulador = 0

// while (visitouCidade === 'sim') {
//   let nomeCidade = prompt('Informe o nome da cidade')
//   cidade += '-' + nomeCidade + '\n'
//   acumulador++
//   visitouCidade = prompt('Já visitou alguma cidade? (sim/não)')
// }

// alert(
//   `
//   Nome: ${nome}
//   Numero de cidades visitadas: ${acumulador}
//   Cidades:\n ${cidade}
//   `
// )

const turista = prompt('Informe seu nome:')
let visitou = prompt('Já visitou alguma cidade? (sim/não)')
let cidade = ''
let acumulador = 0

do {
  let nomeCidade = prompt('Informe o nome da cidade:')
  cidade += '-' + nomeCidade + '\n'
  acumulador++
  visitou = prompt('Já visitou alguma cidade? (sim/não)')
} while (visitou === 'sim')

alert(
  `
  Nome: ${turista}
  Numero de cidades visitadas: ${acumulador}
  Cidades:\n ${cidade}
  `
)
