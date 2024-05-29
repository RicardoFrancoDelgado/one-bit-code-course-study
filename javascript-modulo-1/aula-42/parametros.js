function dobro(x) {
  alert('O dobro de ' + x + ' é ' + x * 2)
}

// dobro(5)
// dobro()

function dizerOla(nome = 'pedrinho') {
  alert('Olá ' + nome + '!')
}

// dizerOla('Ricardo')
// dizerOla()

function soma(a, b) {
  alert('O resultado da soma é' + (a + b))
}

// soma(5, 5)

//ordem de parametros
function criarUsuario(nome, email, senha, tipo = 'admin') {
  const usuario = {
    nome, // equivalente à nome: nome
    email,
    senha,
    tipo
  }

  console.log(usuario)
}

function novoUsuario(nome, tipo = 'admin', email, senha) {
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

// criarUsuario('Ricardo', 'ricardo@email.com', '1234')
// novoUsuario('Ricardo', 'admin', 'ricardo@email.com', '1234')

function muitosParametros(nome, idade, endereco, telefone, aniversario, email, senha) {
  // ...
}

muitosParametros('nome', 'idade', 'endereco', 'telefone', 'aniversario', 'email', 'senha')

function objetosComoParametros(usuario) {
  //...
  usuario.nome
  usuario.idade
}

const dadosDoUsuario = {
  nome: '',
  idade: '',
  endereco: '',
  telefone: '',
  aniversario: '',
  email: '',
  senha: '',
}

objetosComoParametros(dadosDoUsuario)