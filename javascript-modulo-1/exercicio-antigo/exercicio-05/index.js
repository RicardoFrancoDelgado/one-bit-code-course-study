let opcao = ''
let dobra = 0
do {
  opcao = prompt('Deseja entrar na dobra espacial?' + '\n1 - Sim' + '\n2 - Não')

  switch (opcao) {
    case '1':
      dobra++
      alert('Dobra: ' + dobra)
      break
    case '2':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida')
  }
} while (opcao !== '2')
