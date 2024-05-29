function addInput() {
  //pegar o ul pelo id
  const ul = document.getElementById('inputs')

  //criar um novo elemento de lista -> li
  const newLi = document.createElement('li')

  //adicionar classe ao elemento LI, adicionar texto ao elemento LI
  newLi.className = 'list-item'
  newLi.innerText = 'Novo Input: '

  //criar um novo elemento de input
  const newInput = document.createElement('input')

  // adicionar tipo ao input, adicionar um name ao input
  newInput.type = 'text'
  newInput.name = 'input'

  //começar a alinhar ou "passar para seus respectivos pais os seus filhos"
  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}
