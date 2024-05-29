function acharChances(numero) {
  let tentativa = 0

  while (numero >= 1) {
    console.log('Numero: ' + numero + ' | Tentativa: ' + tentativa)
    numero = numero / 2
    tentativa++
  }
}

acharChances(128)
console.log("=============================")
acharChances(256)
console.log("=============================")
acharChances(512)
console.log("=============================")
acharChances(1024)


