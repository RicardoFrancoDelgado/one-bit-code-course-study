const Database = require("./Database");
const Author = require("./Entities/Author");
const User = require("./Entities/User");

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user); // método para salvar o usuário na base de dados
  }

  getUsers() {
    App.#database.findStorage("users");
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author); // método para salvar um author na base de dados
  }

  getAuthor() {
    App.#database.findStorage("authors")
  }
};
