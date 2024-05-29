// conversor de anos-luz para km, milhas e unidade astronomica

function conversor() {
  let anosLuz = prompt('Informe a distancia em anos-luz')

  let opcao = prompt(
    `
  Informe para qual unidade deseja converter
  1 - Parsec (pc)
  2 - Unidade Astronômica (AU)
  3 - Quilômetros (km)
  `
  )

  let unidadeEscolhida
  let converterDistancia

  switch (opcao) {
    case '1':
      unidadeEscolhida = 'Parsec'
      converterDistancia = anosLuz * 0.306601
      break
    case '2':
      unidadeEscolhida = 'Unidade Astrônimica'
      converterDistancia = anosLuz * 0.306601
      break
    case '3':
      unidadeEscolhida = 'Quilômetros'
      converterDistancia = anosLuz * 9.5 * 10 ** 12
      break
    default:
      unidadeEscolhida = 'Unidade não identificada'
      converterDistancia = 'Conversão fora do escopo'
  }

  alert(
    `
    Distancia em Anos-luz: ${anosLuz}
    ${unidadeEscolhida}: ${converterDistancia}
    `
  )
}

conversor()
