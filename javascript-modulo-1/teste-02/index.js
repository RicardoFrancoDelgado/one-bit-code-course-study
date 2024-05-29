// Cadastro de alunos
// Escreva um programa em javascript que funcione como um cadastro de alunos e atenda aos seguintes requisitos:
// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de alunos cadastrados.
// O menu deve ter a opção de salvar um aluno.
// Para salvar um novo aluno o programa deve pedir as seguintes informações: Nome do aluno.Quantidade de cursos.Quantidade de apostilas.Se possui certificado.
// Nome do aluno.
// Quantidade de cursos.
// Quantidade de apostilas.
// Se possui certificado.
// O menu também deve ter a opção de mostrar todos os alunos salvos.

let opcao = ''
let alunos = []

do {
  opcao = prompt(
    'Quantidade de alunos: ' +
      alunos.length +
      '\n\n1. Novo aluno\n2. Mostrar aluno\n3. Sair'
  )

  switch (opcao) {
    case '1':
      let aluno = {}
      aluno.nome = prompt('Informe o nome do aluno:')
      aluno.quantCursos = parseFloat(prompt('Quantos cursos o aluno fará:'))
      aluno.quantApostila = parseFloat(
        prompt('Quantas apostilas o aluno adquiriu:')
      )
      aluno.certificado = prompt('Está incluso o certificado? (sim/não)')

      const confirma = confirm(
        'Deseja cadastrar esse aluno? ' +
          '\nNome: ' +
          aluno.nome +
          '\nQuantidade de cursos: ' +
          aluno.quantCursos +
          '\nQuantidade apostilas: ' +
          aluno.quantApostila +
          '\nCertificado? ' +
          aluno.certificado
      )

      if (confirma) {
        alunos.push(aluno)
      }
      break
    case '2':
      for (let i = 0; i < alunos.length; i++) {
        alert(
          'Aluno: ' +
            (i + 1) +
            '\nNome: ' +
            alunos[i].nome +
            '\nQuantidade de cursos: ' +
            alunos[i].quantCursos +
            '\nQuantidade de apostilas: ' +
            alunos[i].quantApostila +
            '\nCertificado: ' +
            alunos[i].certificado
        )
      }
      break
    case '3':
      alert('Encerrando programa...')
      break
    default:
      alert('Opção inválida')
  }
} while (opcao !== '3')
