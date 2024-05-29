const personagens = [
  { nivel: 42, nome: 'Thrall', raca: 'Orc', classe: 'Xamã' },
  { nivel: 28, nome: 'Garrosh', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 35, nome: 'Varok', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 35, nome: 'Uther', raca: 'Humano', classe: 'Paladino' },
  { nivel: 26, nome: 'Jaina', raca: 'Humano', classe: 'Maga' },
  { nivel: 39, nome: 'Tyrande', raca: 'Elfo Noturno', classe: 'Sacerdotisa' },
  { nivel: 29, nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro' }
]

// Map
// Cria um novo array baseado no original

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome)
// }

// console.log(nomes)

const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

console.log(nomes)

// Filter
// Cria um novo array baseado no array original filtrando alguns dados

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//   if ( personagens[i].raca === "Orc") {
//     orcs.push(personagens[i])
//   }
// }

// console.log(orcs)

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === 'Orc'
})

console.log(orcs)

// Reduce
// Transformar o array em algum outro elemento(valor), porém também é uma transformação do array original

// let nivelTotal = 0

// for (let i = 0; i < personagens.length; i++) {
//   nivelTotal += personagens[i].nivel
// }

// console.log(nivelTotal)

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    valorAcumulado[personagem.raca] = [personagem]
  }

  return valorAcumulado
}, {})

console.log(racas)

// Sort
// Método que serve para ordenar os elementos de acordo com criterios
// o sort modifica o array

// ordenando do menor para o maior
personagens.sort(function (menor, maior) {
  return menor.nivel - maior.nivel
})

console.log(personagens)

// ordenando do maior para o menor
// personagens.sort(function (menor, maior) {
//   return maior.nivel - menor.nivel
// })

// console.log(personagens)
