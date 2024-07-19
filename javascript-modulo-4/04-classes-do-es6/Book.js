/**
 * Palavra reservada class para criar um objeto do tipo "Book",
 * Método constructor() {}, para criar os valores e métodos desse objeto
 */
class Book {
  constructor(title) {
    // temos acesso ao elemento this dentro do constructor
    this.title = title
  }
}
// Instanciação de um novo livro
const arteDaGuerra = new Book("Sun Tzu Arte da Guerra")
const oPoderDoHabito = new Book("O Poder do Hábito")
console.log(oPoderDoHabito)
console.log(arteDaGuerra)