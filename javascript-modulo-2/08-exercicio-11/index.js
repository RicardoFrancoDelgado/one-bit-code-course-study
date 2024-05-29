// função de adicionar jogador
function addPlayer() {
  // pegar o value da position, name, number
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  //pedir um confirmação ao usuário se deseja confirmar a escalação
  const confirmacao = confirm(
    'Escalar o jogador ' + name + ' como ' + position + ' ?'
  )

  // verificar se confirmou
  if (confirmacao) {
    //pegar o elemento que irá receber os jogadores escalados na tela
    const listTime = document.getElementById('escalation-section')
    // criar o elemento de lista com os jogadores
    const playerList = document.createElement('li')
    playerList.id = 'player-' + number // atribuir o id (player + number)
    // no html colocar o texto = posição + nome + numero do jogador
    playerList.innerText = position + ': ' + name + ' (' + number + ')'
    listTime.appendChild(playerList) // atribuir ao pai - ul o li filho

    //limpar o input após preencher os campos
    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

//função de remover jogador
function removePlayer() {
  //pegar o valor do input de remover o jogador
  const number = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player-' + number)

  //pedir confirmação ao usuário para remover jogador
  const confirmacao = confirm(
    'Remover o jogador: ' + playerToRemove.innerText + ' ?'
  )

  if (confirmacao) {
    document.getElementById('escalation-section').removeChild(playerToRemove)
    document.getElementById('numberToRemove').value = ''
  }
}
