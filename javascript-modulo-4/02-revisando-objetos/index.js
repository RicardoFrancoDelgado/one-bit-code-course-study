//? Função construtora de um objeto (do tipo "Book") utilizando PascalCase
function Book(title, pages, tags, author) {
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = quantity => {
    this.inStock = quantity
  }
  this.save = () => {
    // book save
  }
}

const tags = ['Programming', 'Study', 'Technology']
const author = { name: 'Aditya Y. Bhargava' }

//? Chamada de uma função construtora
const entendendoAlgoritmos = new Book("Entendendo Algoritmos", 263, tags, author)
console.log(entendendoAlgoritmos)
entendendoAlgoritmos.addOnStock(30)
console.log(`New stock: ${entendendoAlgoritmos.inStock}`)

//? Objeto criado de forma literal
// const book = {
//   title: "Entendendo Algoritmos",
//   pages: 263,
//   published: true,
//   inStock: 19,
//   tags: ["Programming", "Study", "Technology"],
//   author: {
//     name: "Aditya Y. Bhargava",
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity
//   }
// }

//? Chamadas de um objeto literal
// console.log(book)
// book.addOnStock(30)
// console.log(`New stock: ${book.inStock}`)

