function addParagraphs() {
  //pegar o elemento ul -> Elemento pai
  const ul = document.getElementById('paragraphs')

  //criação de um elemento do tipo li
  const newLi = document.createElement('li')
  newLi.className = 'list-paragraphs'

  //criação de um novo elemento <p></p> via DOM
  const newP = document.createElement('p')

  //Atribuição de classe para o paragrafo e texto ao mesmo
  newP.className = 'paragraph-item'
  newP.innerText = 'Paragrafo criado '

  newLi.appendChild(newP)
  ul.appendChild(newLi)
}
