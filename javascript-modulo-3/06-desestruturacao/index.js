const person = {
  name: 'Ricardo',
  job: 'Developer',
  parents: ['Ulysse', 'Ana', 'Paulo']
}
const name = person.name
const { job, parents } = person

console.log(name, job, parents)

// vai pegar pela ordem dos elementos
const [father, mother, brother] = parents
console.log(father, mother)

function createUser(person) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}

const ricardo = createUser(person)
console.log(ricardo)
