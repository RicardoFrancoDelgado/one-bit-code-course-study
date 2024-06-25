// let nomeNave = 'Milenium Falconis'
// let newName = nomeNave.replace(/i/g, 'x') -> // regex para trocar todos os indices de 
// console.log(newName)


let spaceshipName = prompt('Informe o nome da espaçonave:')
let charReplace = prompt('Digite o caractere que deseja substituir:')

let newChar = prompt('Digite o novo caractere:')

let newSpaceshipName = ""

for (let i = 0; i < spaceshipName.length; i++) {
  if (spaceshipName[i] === charReplace) {
    newSpaceshipName += newChar
  } else {
    newSpaceshipName += spaceshipName[i]
  }
}

alert("O novo nome da nave é " + newSpaceshipName)

