const Address = require('./Address')
const Person = require('./Person')


const address = new Address("Av. Endereço Endereço", 1111, "Casa", "Teste", "RJ")
const ricardo = new Person("Ricardo ... ...", 24, address)

console.log(ricardo)
console.log(ricardo.address.fullAddress())

