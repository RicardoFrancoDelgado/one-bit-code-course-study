const Address = require('./Address')
const Person = require('./Person')


const address = new Address("Av. Cesário de Mello", 1180, "Casa 2", "Paciência", "RJ")
const ricardo = new Person("Ricardo Franco Delgado", 24, address)

console.log(ricardo)
console.log(ricardo.address.fullAddress())

