// exibir um alerta com a seguinte mensagem => "Bem-vindo! A seguir pediremos que informe alguns dados."
// Peça que o usuario informe nome, idade e confirme a sua idade.
// Exiba na tela um alerta com => nome digitado, idade digitada, confirmação da idade

function boasVindas() {
  const mensagem = alert(
    'Bem-vindo! A seguir pediremos que informe alguns dados.'
  )
  return mensagem
}
boasVindas()

function usuario() {
  const nome = prompt('Informe o nome do usuário')

  console.log('Nome: ' + nome)

  if (!nome) {
    alert('Não é possível prosseguir sem informar o nome')
    prompt('Por favor informe um nome de usuário')
  }

  const idade = prompt('Informe a idade do usuário')

  console.log('Idade: ' + idade)

  if (!idade) {
    alert('Não é possível prosseguir sem informar a idade')
    prompt('Por favor informe a idade do usuário')
  }

  const confirmacao = confirm(
    'Deseja confirmar a idade informada: ' + idade + ' ?'
  )

  if (confirmacao) {
    return alert(
    `
    Nome informado: ${nome} 
    Idade informada: ${idade} anos
    Idade confirmada: ${confirmacao}
    `
    )
  }
}

usuario()
