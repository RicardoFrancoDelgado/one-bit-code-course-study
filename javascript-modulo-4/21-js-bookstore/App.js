const Database = require("./Database");
const Author = require("./Entities/Author");
const Book = require("./Entities/Book");
const Order = require("./Entities/Order");
const Poster = require("./Entities/Poster");
const User = require("./Entities/User");

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user); // método para salvar o usuário na base de dados
  }

  getUsers() {
    return App.#database.findStorage("users");
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author); // método para salvar um author na base de dados
  }

  getAuthors() {
    return App.#database.findStorage("authors");
  }

  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    App.#database.saveBook(book);
  }

  addBooks(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity);
  }

  getBooks() {
    return App.#database.findStorage("books");
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock);
    App.#database.savePoster(poster);
  }

  addPosters(posterName, quantity) {
    App.#database.addPostersToStock(posterName, quantity);
  }

  getPosters() {
    return App.#database.findStorage("posters");
  }

  createOrders(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity);
      } else if (product instanceof Poster) {
        App.#database.removePostersFromStock(product.name, quantity);
      }
    });
  }

  getOrders() {
    return App.#database.findStorage("orders");
  }

  showDatabase() {
    App.#database.showStorage();
  }
};
