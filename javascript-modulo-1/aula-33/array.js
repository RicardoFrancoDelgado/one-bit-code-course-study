const arr = [
  'Frodo',
  'Sam',
  'Merry',
  'Pippin',
  'Gandalf',
  'Aragorn',
  'Legolas',
  'Gimli'
]
console.log(arr)

//adicionar elementos
let tamanho = arr.push('Boromir')
console.log(arr)
console.log(tamanho)
//unshift => adicionar no início do array
tamanho = arr.unshift('Teste')
console.log(arr)
console.log(tamanho)

//Remover elementos
//pop -> remover no final
let ultimo = arr.pop()
console.log(arr)
console.log(ultimo)

//shift -> remover no começo
ultimo = arr.shift()
console.log(arr)
console.log(ultimo)

//pesquisar por um elemento
//includes
let inclui = arr.includes('Gandalf o Cinzento')
let inclui2 = arr.includes('Gandalf')
console.log(inclui)
console.log(inclui2)

//pesquisar o index
//indexOf()
const indice = arr.indexOf('Gandalf')
console.log(indice)

//Cortar concatenar
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4) // referencia os itens começando do final
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)

//substituição
let elementosRemovidos = sociedade.splice(
  indice,
  1,
  'Gandalf, o Cinzento',
  1,
  3,
  false
)
console.log(sociedade)
console.log(elementosRemovidos)

//iteração sobre os elementos do array
//percorrer o array
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i]
  console.log(elemento + ' se encontra na posição ' + i)
}
