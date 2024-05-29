const nome = prompt('Informe o nome do piloto')
let velocity = 0
let newVelocity = prompt('A que velocidade gostaria de acelerar')

let confirmacao = confirm(`Estamos acelerando para ${newVelocity} km/s`)

if (confirmacao) {
  velocity = newVelocity
}

if (velocity <= 0) {
  alert('Nave está parada. Considere partir e aumentar a velocidade')
} else if (velocity < 40) {
  alert('Você está devagar. Podemos aumentar mais.')
} else if (velocity < 80) {
  alert('Parece uma boa velocidade para manter')
} else if (velocity < 100) {
  alert('Velocidade considere diminuir')
} else {
  alert('Velocidade perigosa controle automático forçado.')
}

alert(`
Piloto: ${nome}
Velocidade: ${velocity} km/s
`)
