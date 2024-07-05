import { resultInput } from '../index.js'

function copyBoard() {
  document
    .getElementById('copyToClipBoard')
    .addEventListener('click', function (ev) {
      const button = ev.currentTarget
      if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
      } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
      }
    })
}

export { copyBoard }
