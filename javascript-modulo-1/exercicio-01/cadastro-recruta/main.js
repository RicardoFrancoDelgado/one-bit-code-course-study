let primeiroNome = prompt('Informe seu primeiro nome: ')
let sobreNome = prompt('Informe seu sobrenome: ')
let campoEstudo = prompt('Informe seu campo de estudo: ')
let anoNascimento = prompt('Informe seu ano de nascimento: ')

let idade = 2023 - anoNascimento

let mensagem = `Recruta cadastrado com sucesso!
Nome completo: ${primeiroNome} ${sobreNome},
Campo de estudo: ${campoEstudo},
Idade: ${idade}
`
alert(mensagem)
