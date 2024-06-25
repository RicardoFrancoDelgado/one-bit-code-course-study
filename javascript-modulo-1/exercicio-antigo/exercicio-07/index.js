let spaceshipName = prompt('Informe o nome da espaçonave')
const caractereProibido = 'e'
let nomeReverso = ''

for (let i = spaceshipName.length - 1; i >= 0; i--) {
  if (spaceshipName[i] != caractereProibido) {
    nomeReverso += spaceshipName[i]
  } else {
    break
  }
}

console.log(nomeReverso)