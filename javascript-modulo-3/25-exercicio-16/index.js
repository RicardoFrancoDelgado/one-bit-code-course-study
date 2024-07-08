const dayjs = require('dayjs')

function getAge(date) {
  // pegar a data de aniversário
  const birthday = dayjs(date)
  // pegar o dia de hoje => basta passar o próprio método dayjs()
  const today = dayjs()
  // método para saber a idade (diaAtual - dataAniversário)
  const age = today.diff(birthday, 'year')
  // próximo aniversário
  const nextBirthday = birthday.add(age + 1, 'year')
  // dias para o próximo aniversário
  const daysToNextBirthday = nextBirthday.diff(today, 'day')

  // mensagens
  console.log(`Idade: ${age}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias para o próximo aniversário: ${daysToNextBirthday} dias`)
}

getAge('2000-06-20')
