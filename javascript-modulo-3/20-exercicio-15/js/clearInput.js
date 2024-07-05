import { input } from './index.js'

function clearInput() {
  document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
  })
}

export { clearInput }
