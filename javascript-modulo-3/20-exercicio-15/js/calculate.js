import { input, resultInput } from './index.js'

function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.classList.remove('error')

  if (result === Infinity) {
    resultInput.value = "Can't divide by 0"
  } else if (isNaN(result)) {
    resultInput.value = "Can't divide by 0"
  } else {
    resultInput.value = result
  }
}

function equal() {
  document.getElementById('equal').addEventListener('click', calculate)
}

export { calculate, equal }
