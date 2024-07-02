// session storage
document.getElementById('sessionBtn').addEventListener('click', function () {
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click', function () {
  const info = sessionStorage.getItem('info')
  alert('A informação salva é: ' + info)
})

// local storage
document.getElementById('localBtn').addEventListener('click', function () {
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
  const t = localStorage.getItem('text')
  alert('O texto no local storage é: ' + t)
})

// cookie
document.getElementById('cookieBtn').addEventListener('click', function () {
  const input = document.getElementById('cookie')
  // cookieName=value; expires=UTCStringDate; path=/
  const cookied = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date('2024,7,2') + ';'
  const path = 'path=/;'

  document.cookie = cookied + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
  const input = document.getElementById('cookie2')
  // cookieName=value; expires=UTCStringDate; path=/
  const cookied2 = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date('2024,7,2') + ';'
  const path = 'path=/;'

  document.cookie = cookied2 + expiration + path
  input.value = ''
  console.log(document.cookie)
})