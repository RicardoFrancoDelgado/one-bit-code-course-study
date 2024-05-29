// Cadastro de Imóveis
// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

let resposta = ''
let imoveisCadastrados = []

do {
  // menu
  resposta = prompt(
    'Imóveis cadastrados: ' +
      imoveisCadastrados.length +
      '\n\n1 - Novo imóvel\n2 - Mostrar todos os imóveis\n3 - Sair'
  )

  switch (resposta) {
    case '1':
      const imovel = {}
      imovel.nomeProprietario = prompt('Informe o nome do proprietário:')
      imovel.quantQuartos = parseFloat(
        prompt('Informe a quantidade de quantos:')
      )
      imovel.quantBanheiros = parseFloat(
        prompt('Informe a quantidade de banheiros:')
      )
      imovel.possuiGaragem = prompt('Possui garagem? (sim/não)')

      const confirma = confirm(
        'Salvar este imóvel?\n' +
          '\nProprietário: ' +
          imovel.nomeProprietario +
          '\nQuantidade de quartos: ' +
          imovel.quantQuartos +
          '\nQuantidade de banheiros: ' +
          imovel.quantBanheiros +
          '\nPossui garagem: ' +
          imovel.possuiGaragem
      )

      if (confirma) {
        imoveisCadastrados.push(imovel)
      }
      break
    case '2':
      for (let i = 0; i < imoveisCadastrados.length; i++) {
        alert(
          'imovel ' +
            (i + 1) +
            '\nProprietario: ' +
            imoveisCadastrados[i].nomeProprietario +
            '\nQuartos: ' +
            imoveisCadastrados[i].quantQuartos +
            '\nBanheiros: ' +
            imoveisCadastrados[i].quantBanheiros +
            '\nGaragem: ' +
            imoveisCadastrados[i].possuiGaragem
        )
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida')
  }
} while (resposta !== '3')
