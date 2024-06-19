function createLabel(text, htmlFor) {
  // parametros para informar o for e o texto da label
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  // ordem de parametros que vão ser adicionados na chamada da função
  // id, value, name, type(sendo padrão text caso n seja definido um tipo) e um placeholder por padrão vazio
  const input = document.createElement('input') // criação do input
  input.id = id // definição do id
  input.value = value // definição do value
  input.name = name // definição do name
  input.type = type // definição do type
  input.placeholder = placeholder // definição do placeholder
  return input
}

const techAddBtn = document.getElementById('techAdd') // pegar o botão de adicionar tecnologia
const form = document.getElementById('form-dev') // pegar o formulário onde vai ficar as tecnologias adicionadas
const desevolvedor = [] // array vazio para que seja colocado as informações dos desenvolvedores
let inputLines = 0 // iniciando um contador que vai ser utilizado para diferenciar id (index)

techAddBtn.addEventListener('click', function () {
  const techList = document.getElementById('techList')

  const newLine = document.createElement('li') // criar o elemento li para inserir na lista
  const lineIndex = inputLines // adicionamos ao index da linha a váriavel contador que inicia em 0
  inputLines++
  newLine.id = 'inputLine-' + lineIndex // id setado dinamicamente
  newLine.className = 'inputLines' // atributo name adicionado

  const techNameLabel = createLabel('Nome: ', 'techName-' + lineIndex) // criação de uma label para referenciar o input
  const techNameInput = createInput('tecName-' + lineIndex, null, 'techName') // input onde vai ser inserido o nome

  const expLabel = createLabel('Experiência: ') // label de experiencia com a tecnologia
  const id1 = 'expRadio-' + lineIndex + '.1' // index para diferenciar o valor do radio 1
  const radioExp1 = createInput(id1, '0-2 anos', 'techExp-' + lineIndex, 'radio') // botão radio 1
  const radioLabel1 = createLabel('0-2 anos', id1) // label do botão 1

  const id2 = 'expRadio-' + lineIndex + '.2' // index para diferenciar o valor do radio 2
  const radioExp2 = createInput(id2, '3-4 anos', 'techExp-' + lineIndex, 'radio') // botão radio 2
  const radioLabel2 = createLabel('3-4 anos', id2) // label do botão 2

  const id3 = 'expRadio-' + lineIndex + '.3' // label do botão 3
  const radioExp3 = createInput(id1, '5+ anos', 'techExp-' + lineIndex, 'radio') // label do botão 3
  const radioLabel3 = createLabel('5+ anos ', id3) // label do botão 3

  const removeTechBtn = document.createElement('button')
  // criação de um botão para remover a linha criada esse botão é criado assim que o input do tipo radio é criado
  removeTechBtn.type = 'button' // type pra diferenciar do submit
  removeTechBtn.innerText = 'Remover' // texto do botão
  removeTechBtn.addEventListener('click', function () {
    // função para remover do elemento pai o filho que foi criado
    techList.removeChild(newLine)
  })

  newLine.append(
    techNameLabel,
    techNameInput,
    expLabel,
    radioExp1,
    radioLabel1,
    radioExp2,
    radioLabel2,
    radioExp3,
    radioLabel3,
    removeTechBtn
  )
  techList.appendChild(newLine) // colocando os elementos filhos no elemento pai
})

form.addEventListener('submit', function (ev) {
  // "escutador para enviar as informações após preencher o formulário"
  ev.preventDefault() // método para cancelar o evento padrão do formulário

  const usernameInput = document.getElementById('username') // selecionar o nome de desenvolvedor
  const inputLines = document.querySelectorAll('.inputLines') // selecionar as linhas de tecnologias preenchidas

  let technologies = [] // array para armazenar as tecnologias e tempo de experiencias de tecnologia
  inputLines.forEach(function (line) {
    // iterar sobre as respostas colocando ela no array tecnologies[]
    //#lineId input[name="techName"]
    const techName = document.querySelector(
      '#' + line.id + ' input[name="techName"]'
    ).value
    const techExp = document.querySelector(
      '#' + line.id + ' input[type="radio"]:checked'
    ).value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: usernameInput.value, technologies: technologies }
  desevolvedor.push(newDev)
  alert('Desenvolvedor cadastrado com sucesso!')

  console.log(desevolvedor)
})
