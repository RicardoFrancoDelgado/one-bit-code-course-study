function pesquisaBinaria(list, item) {
  let baixo = 0
  let alto = list.length - 1

  while (baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2)
    const chute = list[meio]

    if (chute === item) {
      return meio
    } else if (chute > item) {
      alto = meio - 1
    } else {
      baixo = meio + 1
    }
  }

  return null
}

const minhaLista = [1, 3, 5, 7, 9]

console.log(pesquisaBinaria(minhaLista, 1))
console.log(pesquisaBinaria(minhaLista, 3))
console.log(pesquisaBinaria(minhaLista, 5))
console.log(pesquisaBinaria(minhaLista, 7))
console.log(pesquisaBinaria(minhaLista, 9))

console.log(pesquisaBinaria(minhaLista, 11 ))
