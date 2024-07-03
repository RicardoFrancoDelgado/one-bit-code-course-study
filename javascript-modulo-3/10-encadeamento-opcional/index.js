/**
 * Optional chaining
 * permite ler propriedades de uma cadeia de objetos sem que uma validação
 * de cada cadeia seja realizada
 *
 * ler propriedades internas
 * console(.)log => . -> encadeamento
 * funciona de forma similar ao encadeamento normal
 * escrito com o "?"
 *
 * permite acessar propriedades internas sem lançar erros quando uma propriedade
 * é nullish(null ou undefined)
 */

const user = {
  name: 'John Doe',
  email: 'doejohn@email.com',
  friends: [
    {
      name: 'Mary',
      address: {
        street: 'Some Street',
        number: 89
      }
    }
  ],
  age: 42,
  phone: {
    countryCode: '+55',
    ddd: '22',
    number: '998765432'
  }
}


// console.log(user.friends[0].phone.ddd) // o erro acontece no ddd lendo uma propriedade dentro de undefined
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)