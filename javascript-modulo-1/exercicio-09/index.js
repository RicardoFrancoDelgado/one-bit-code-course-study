// Calculadora Geométrica
// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

// triangulo
function areaTriangulo() {
  const base = parseFloat(prompt('Informe o valor da base do triângulo'))
  const altura = parseFloat(prompt('Informe o valor da altura do triângulo'))
  return (base * altura) / 2
}

// retangulo
function areaRetangulo() {
  const base = parseFloat(prompt('Informe o valor da base do triângulo'))
  const altura = parseFloat(prompt('Informe o valor da altura do triângulo'))
  return base * altura
}

// quadradado
function areaQuadradado() {
  const lado = parseFloat(prompt('Informe o lado do quadrado'))
  return lado * lado
}

// trapezio
function areaTrapezio() {
  const baseMaior = parseFloat(prompt('Informe a maior base do trapézio:'))
  const baseMenor = parseFloat(prompt('Informe a menor base do trapézio:'))
  const altura = parseFloat(prompt('Informe a altura do trapézio'))

  return ((baseMaior + baseMenor) * altura) / 2
}

// circulo
function areaCirculo() {
  const raio = parseFloat(prompt('Informe o valor do raio'))
  return 3.14 * raio * raio
}

function menuInterativo() {
  return prompt(
    'Calculadora Geométrica' +
      '\n1. Área do triângulo' +
      '\n2. Área do retângulo' +
      '\n3. Área do quadrado' +
      '\n4. Área do trapézio' +
      '\n5.Área do circulo' +
      '\n6. sair'
  )
}

function executar() {
  let opcao = ''

  do {
    opcao = menuInterativo()
    let resultado

    switch (opcao) {
      case '1':
        resultado = areaTriangulo()
        break
      case '2':
        resultado = areaRetangulo()
        break
      case '3':
        resultado = areaQuadradado()
        break
      case '4':
        resultado = areaTrapezio()
        break
      case '5':
        resultado = areaCirculo()
        break
      case '6':
        alert('Encerrando programa')
        break
      default:
        alert('Opção inválida')
    }

    if (resultado) {
      alert('Resultado: ' + resultado)
    }
  } while (opcao !== '6')
}

executar()
