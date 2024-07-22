class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  isLogged(email, password) {
    if (this.email === email && this.password === password) {
      console.log(`Logado feito com sucesso com e-mail ${email} e senha ${password}`)  
    } else {
      console.log(`Login mal sucedido e-mail ou senha estão incorretos.`)
    }
  }
}

const name = "Ricardo Franco Delgado"
const email = "ricardo@email.com"
const password = "1234@"

const ricardo = new User(name, email, password)

ricardo.isLogged("ricardo@email.com", "1234@")
// ricardo.isLogged("ricardo@email.com", "1234#") -> loggin errado
console.log(ricardo)