// média simples
const media = (...numbers) => {
  const sum = numbers.reduce((count, number) => count + number, 0)
  const mediaSum = sum / numbers.length
  return mediaSum
}

console.log(`Média Aritmética simples: ${media(4, 5, 5).toFixed(2)}`)

// média ponderada
const mediaPonderada = (...entries) => {
  // entram valores e pesos, ex: {nota: 9, peso: 2}
  const sum = entries.reduce(
    (count, { number, weight }) => count + number * (weight ?? 1),
    0
  )
  const sumWeight = entries.reduce(
    (count, { weight }) => count + (weight ?? 1),
    0
  )
  return sum / sumWeight
}

console.log(
  `Média Ponderada: ${mediaPonderada(
    { number: 10, weight: 2 },
    { number: 7, weight: 1 },
    { number: 5, weight: 1 }
  )}`
)

// mediana => valor central ou media dos dois valores centrais
const median = (...numbers) => {
  // ordenar e pegar o valor central
  const numbersOrdered = [...numbers].sort((a, b) => a - b)
  const middleNumber = Math.floor(numbersOrdered.length / 2)

  if (numbersOrdered % 2 !== 0) {
    return numbersOrdered[middleNumber]
  }

  const firstNumber = numbersOrdered[middleNumber - 1]
  const secondNumber = numbersOrdered[middleNumber]

  return media(firstNumber, secondNumber)
}

console.log(`Mediana: ${median(2, 55, 7, 6, 67, 4, 3, 4)}`)
console.log(`Mediana: ${median(1, 2, 3, 4, 5)}`)

// moda
const mode = (...numbers) => {
  // matriz [ [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])

  quantities.sort((a, b) => b[1] - a[1]) // organiza para que apareçam somente os qua mais aparecem primeiro
  return quantities[0][0] // retorna a primeira ocorrencia do numero que mais se repete
}

console.log(`moda ${mode(1, 2, 3, 4, 4, 4, 4, 4, 2, 2, 44, 2)}`)
