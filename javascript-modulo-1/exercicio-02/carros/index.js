// Teste de Velocidade
// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

let nomeCarroUm = prompt('Escreva o nome do primeiro carro:')
let velocidadeCarroUm = prompt('Escreva a velocidade do primeiro carro:')
let nomeCarroDois = prompt('Escreva o nome do segundo carro:')
let velocidadeCarroDois = prompt('Escreva a velocidade do segundo carro:')

if (velocidadeCarroUm > velocidadeCarroDois) {
  alert(`O carro ${nomeCarroUm} é mais rapido que o ${nomeCarroDois}`)
} else if (velocidadeCarroDois === velocidadeCarroUm) {
  alert(`O carro ${nomeCarroDois} tem a mesma velocidade que o ${nomeCarroUm}`)
} else {
  alert(`O carro ${nomeCarroDois} é mais rapido que o ${nomeCarroUm}`)
}
