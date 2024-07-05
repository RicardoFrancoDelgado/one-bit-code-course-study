import { name, label, input, br } from "./functions.js"

console.log(label({ for: 'fullname', textContent: 'Nome completo' }))
console.log(
  input({
    for: 'fullname',
    name: 'fullname',
    placeholder: 'Digite seu nome completo'
  })
)
console.log(br())
console.log(name)
