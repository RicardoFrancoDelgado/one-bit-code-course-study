// média simples
const average = (...nums) => {
  const soma = nums.reduce((count, num) => count + num, 0)
  const media = soma / nums.length

  return media
}

console.log(`Média Aritmética simples: ${average(2, 3, 4, 5)}`)

// média ponderada
const mediaPonderada = (...entries) => {
  const soma = entries.reduce(
    (count, { num, peso }) => count + num * (peso ?? 1),
    0
  )
  const somaPeso = entries.reduce(
    (count, entrada) => count + (entrada.peso ?? 1),
    0
  )
  return soma / somaPeso
}
console.log(
  `Média Ponderada: ${mediaPonderada(
    { num: 9, peso: 3 },
    { num: 7, peso: 1 },
    { num: 10, peso: 1 }
  )}`
)

// mediana
const median = (...numbers) => {
  //ordenar os numeros
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  // encontrar o valor do meio
  const middle = Math.floor(orderedNumbers.length / 2)
  // verificar se o valor é impar
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1] // primeiro el do meio
  const secondMedian = orderedNumbers[middle] // segundo el do meio
  return average(firstMedian, secondMedian) // média
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

// moda
const mode = (...numbers) => {
  // [ [ n, qtd], [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])

  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
