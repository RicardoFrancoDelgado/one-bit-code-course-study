// Pilha de Cartas
// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let pilha = []
let opcao = ''

do {
  let cartas = ''

  // for (let i = 0; i < pilha.length; i++) {
  //   cartas += i + 1 + ' - ' + pilha[i] + '\n'
  // }

  opcao = prompt(
    'Cartas no baralho: ' + pilha.length +
    '\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair'
  )

  switch (opcao) {
    case '1':
      let cartaAdicionada = prompt('Qual carta quer adicionar?')
      pilha.unshift(cartaAdicionada)
      break
    case '2':
      let retirarCarta = pilha.shift()
      if (!retirarCarta) {
        alert('Não tem cartas para serem retiradas no baralho')
      } else {
        alert('Você puxou um ' + retirarCarta)
      }
      break
    case '3':
      alert("Encerrando o programa")
      break
    default:
      alert("Opção inválida")
  }
} while (opcao !== '3')
