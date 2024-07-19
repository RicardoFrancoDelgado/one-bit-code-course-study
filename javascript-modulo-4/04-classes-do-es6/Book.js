/**
 * Palavra reservada class para criar um objeto do tipo "Book",
 * Método constructor() {}, para criar os valores e métodos desse objeto
 */
class Book {
  constructor(title) {
    // temos acesso ao elemento this dentro do constructor
    this.title = title
    this.published = false
  }

  publish() {
    this.published = true
  }
}
// Instanciação de um novo livro
const arteDaGuerra = new Book("Sun Tzu Arte da Guerra")
const oPoderDoHabito = new Book("O Poder do Hábito")

oPoderDoHabito.publish()

console.log(oPoderDoHabito)
console.log(arteDaGuerra)

// método para saber se uma instancia pertence a classe
console.log(oPoderDoHabito instanceof Book)