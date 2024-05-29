let primeiroNumero = prompt('Informe o primeiro numero:')
let segundoNumero = prompt('Informe o segundo numero:')

let a = parseFloat(primeiroNumero)
let b = parseFloat(segundoNumero)

let adicao = a + b
let subtracao = a - b
let divisao = a / b
let multiplicacao = a * b

let resultado = `Adição: ${adicao}
Subtração: ${subtracao}
Divisão: ${divisao}
Multiplicação: ${multiplicacao}
`
alert(resultado)


c