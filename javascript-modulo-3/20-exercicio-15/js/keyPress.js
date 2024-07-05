import { input, allowedKeys } from '../index.js'

function keyUse() {
  document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
      const value = charKeyBtn.dataset.value
      input.value += value
    })
  })
}

function keyPress() {
  input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    if (ev.key === 'Backspace') {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
      calculate()
    }
  })
}

export { keyUse, keyPress }
