function register(ev) {
  console.log(ev)
  const sectionElement = ev.currentTarget.parentNode
  const username = ev.currentTarget.parentNode.children.username.value
  const password = ev.currentTarget.parentNode.children.password.value
  const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value

  if(password === passwordConfirmation) {
    alert(`Usuário ${username} registrado!`)
  } else {
    alert(`As senhas não conferem!`)
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListener() {
  button.removeEventListener('click', register)
  alert('Evento removido')
}

button.addEventListener('mouseover', function(ev) {
  console.log(ev.currentTarget)
})