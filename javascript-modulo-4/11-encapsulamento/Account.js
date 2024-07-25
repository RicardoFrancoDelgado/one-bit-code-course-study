/**
 * Fazer com que uma classe tenha métodos e atributos privados, basta colocarmos
 * um # na frente do método atributo da classe e passar esses atributos também
 * fora do construtor
 * método #authenticate para retornar um boolean verificando se email e senha
 * são iguais ao do parametro que foi passado
 */

class Account {
  #password
  #balance

  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return null
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}

const user = {
  email: 'ricardo@email.com',
  password: '1234'
}

const myAccount = new Account(user) // primeira classe
console.log(myAccount)

//-> cria novos atributos balance e password que não correspondem ao da classe
// myAccount.balance = 99999
// myAccount.password = '23232323'

// segunda classe diferente da primeira e sem nenhuma relação coma a mesma
console.log(myAccount)
// -> retorna o null pois não foi passado nenhum email e senha para o parametro
console.log(myAccount.getBalance())
//-> passado email e senha corretos então temos acesso ao balance
console.log(myAccount.getBalance('ricardo@email.com', '1234'))

// -> erro, pois é impossível acessar um método/atributo que está privado
// myAccount.#balance = 99999
// myAccount.#password = '23232323'
