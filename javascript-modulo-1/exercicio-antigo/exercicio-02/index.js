let nomeMaisVelha = prompt('Informe o nome da pessoa mais velha')
let idadeMaisVelha = parseFloat(prompt('Informe a idade da pessoa mais velha'))

console.log(`Nome: ${nomeMaisVelha}`)
console.log(`Idade: ${idadeMaisVelha}`)

let nomeMaisNovo = prompt('Informe o nome da pessoa mais nova')
let idadeMaisNovo = parseFloat(prompt('Informe a idade da pessoa mais nova'))

console.log(`Nome: ${nomeMaisNovo}`)
console.log(`Idade: ${idadeMaisNovo}`)

let diferenca = idadeMaisVelha - idadeMaisNovo

function exibirPessoaMaisVelha() {
  return alert(`
  Nome da pessoa mais velha: ${nomeMaisVelha}
  Idade da pessoa mais velha: ${idadeMaisVelha}
  `)
}
exibirPessoaMaisVelha()

function exibirPessoaMaisNova() {
  return alert(`
  Nome da pessoa mais nova: ${nomeMaisNovo}
  Idade da pessoa mais nova: ${idadeMaisNovo}
  `)
}
exibirPessoaMaisNova()

function exibirDiferença() {
  const mensagem = alert(
    'Diferença de idade entre a pessoa mais velha e a pessoa mais nova: ' +
      diferenca +
      ' anos'
  )
  return mensagem
}
exibirDiferença()
