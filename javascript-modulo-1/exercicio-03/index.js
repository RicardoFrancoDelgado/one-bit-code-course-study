// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
// milímetro (mm)
// centímetro (cm)
// decímetro (dm)
// decâmetro (dam)
// hectômetro (hm)
// quilômetro (km)
// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

const valorMetros = prompt('Insira a medida em metros')

let opcao = prompt(
  `
  Para qual unidade deseja converter?
  1 - milimetro (mm)
  2 - centimetro (cm)
  3 - decímetro (dm)
  4 - decâmetro (dam)
  5 - hectômetro (hm)
  6 - quilômetro (km)
  `
)

let conversao = 0

switch (opcao) {
  case '1':
    conversao += valorMetros * 1000
    alert(`Resultado: ${valorMetros} m = ${conversao} mm`)
    break
  case '2':
    conversao += valorMetros * 100
    alert(`Resultado: ${valorMetros} m ${conversao} cm`)
    break
  case '3':
    conversao += valorMetros * 10
    alert(`Resultado: ${valorMetros} m ${conversao} dm`)
    break
  case '4':
    conversao += valorMetros / 10
    alert(`Resultado: ${valorMetros} m ${conversao} dam`)
    break
  case '5':
    conversao += valorMetros / 100
    alert(`Resultado: ${valorMetros} m ${conversao} hm`)
    break
  case '6':
    conversao += valorMetros / 1000
    alert(`Resultado: ${valorMetros} m ${conversao} km`)
    break
  default:
    alert('Opção inválida')
}
