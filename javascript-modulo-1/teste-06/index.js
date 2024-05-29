const vagas = []

// função de listar vagas
// A opção de listar as vagas deve mostrar o índice, o nome(nome da vaga) e a quantidade de candidatos inscritos de todas as vagas.
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ' - '
    textoFinal += vaga.nome
    textoFinal += ' ( ' + vaga.candidatos.length + ' candidato(s) )\n'
    return textoFinal
  }, '')

  alert(vagasEmTexto)
}

//A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
function criarVaga() {
  const nome = prompt('Informe o nome da vaga:')
  const descricao = prompt('Informe a descrição da vaga:')
  const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga')

  const confirmacao = confirm(
    'Deseja criar a vaga?\n' +
      'Nome: ' +
      nome +
      '\nDescrição: ' +
      descricao +
      '\nData Limite: ' +
      dataLimite
  )

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert('Vaga criada com sucesso!')
  }
}
// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
function visualizarVaga() {
  const indice = prompt('Informe o índice da vaga que deseja visualizar:')
  const vaga = vagas[indice]

  const candidatoEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    indice
  ) {
    return textoFinal + '\n -' + indice
  },
  '')

  alert(
    'Nº da vaga: ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData Limite: ' +
      vaga.dataLimite +
      '\nQuantidade de canditados: ' +
      vaga.candidatos.length +
      '\nCandidatos inscritos: ' +
      candidatoEmTexto
  )
}
// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
function inscreverCandidato() {
  const candidato = prompt('Informe o nome do candidato(a):')
  const indice = prompt('Informe o índice da vaga que deseja se inscrever:')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    'Deseja confirmar a inscrição do candidato: ' +
      candidato +
      '\nIndice: ' +
      indice +
      '\nVaga: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData limite: ' +
      vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
  }

  alert('Candidato inscrito com sucesso!')
}
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
function excluirVaga() {
  const indice = prompt('Informe o índice da vaga que deseja excluir:')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    'Tem certeza que deseja excluir a vaga? ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData limite: ' +
      vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert('Vaga excluida')
  }
}
// menu interativo

function menuInterativo() {
  const opcao = prompt(
    'Sistema de Vagas de Emprego' +
      '\n\nEscolha uma opção para iniciar' +
      '\n1 - Listar vagas' +
      '\n2 - Criar Vaga' +
      '\n3 - Visualizar vagas' +
      '\n4 - Inscrever candidato' +
      '\n5 - Excluir vaga' +
      '\n6 - Sair'
  )

  return opcao
}

function executar() {
  let opcao = ''

  do {
    opcao = menuInterativo()
    switch (opcao) {
      case '1':
        listarVagas()
        break
      case '2':
        criarVaga()
        break
      case '3':
        visualizarVaga()
        break
      case '4':
        inscreverCandidato()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert('Saindo...')
        break
      default:
        alert('Opção inválida')
    }
  } while (opcao !== '6')
}

executar()
