function escalarJogador() {
  const posicao = document.getElementById('posicao').value
  const nome = document.getElementById('nome').value
  const numero = document.getElementById('numero').value

  const confirmacao = confirm(
    `Deseja escalar o jogador ${nome} na posição ${posicao} ?`
  )

  if (confirmacao) {
    const escalacaoSection = document.getElementById('escalacao-section')

    const jogadorList = document.createElement('li')
    jogadorList.id = `Posicao-${numero}`
    jogadorList.innerText = `${posicao}: ${nome} (${numero})`
    escalacaoSection.appendChild(jogadorList)

    document.getElementById('posicao').value = ''
    document.getElementById('nome').value = ''
    document.getElementById('numero').value = ''
  }
}

function removerJogador() {
  const numero = document.getElementById('numero-jogador').value
  const jogadorParaRemover = document.getElementById('Posicao-' + numero)

  const confirmacao = confirm(
    `Deseja remover o jogador ${jogadorParaRemover.innerText} ?`
  )

  if (confirmacao) {
    document.getElementById('escalacao-section').removeChild(jogadorParaRemover)
    document.getElementById('numero-jogador').value = ''
  }
}