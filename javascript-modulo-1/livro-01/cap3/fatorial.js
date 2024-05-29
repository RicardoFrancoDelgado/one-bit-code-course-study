function fatorial(numero) {
  if (numero === 0) {
    return 1
  } else if (numero === 1) {
    return 1
  } else {
    return numero * fatorial(numero - 1)
  }
}

// Uma função que usa a função como retorno (recursão) -> Utilizada em pilha

console.log(fatorial(3))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(10))
