function addStudent() {
  const matricula = document.getElementById('matricula').value
  const nome = document.getElementById('name').value
  const pacote = document.getElementById('pacote').value

  // console.log({ matricula, nome, pacote })

  const confirmacao = confirm(
    'Deseja cadatrar o aluno' +
      '\nMatricula: ' +
      matricula +
      '\nNome: ' +
      nome +
      '\nPacote: ' +
      pacote
  )

  if (confirmacao) {
    alert('Cadastrado com sucesso')

    const list = document.getElementById('student-list')
    const studentList = document.createElement('li')
    studentList.id = 'student-' + matricula
    studentList.innerText = matricula + ' ' + nome + ' ' + ' (' + pacote + ')'

    list.appendChild(studentList)

    document.getElementById('matricula').value = ''
    document.getElementById('name').value = ''
    document.getElementById('pacote').value = ''
  }
}
