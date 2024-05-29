const buscaMenor = (arr) => {
  let menorElemento = arr[0]
  let menorIndice = 0

  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < menorElemento) {
      menorElemento = arr[i]
      menorIndice = i
    }
  }

  return menorIndice
}

const ordenacaoPorSelecao = (arr) => {
  const novoArr = []
  const arrCopia = [...arr]

  for (let i = 0; i < arr.length; i++) {
    const menorIndice = buscaMenor(arrCopia)

    novoArr.push(arrCopia.splice(menorIndice, 1)[0])
  }

  return novoArr
}

const arrOrigem = [5, 3, 6, 2, 10]
const arrSorteado = ordenacaoPorSelecao([5, 3, 6, 2, 10])

console.log("Array desordenado - ", arrOrigem); 
console.log("Array ordenado - ", arrSorteado);