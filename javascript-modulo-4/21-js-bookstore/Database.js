module.exports = class Database {
  #storage = {
    author: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  findStorage(key) {
    return this.#storage[key];
  }

  // método para salvar o autor
  saveAuthor(author) {
    this.#storage.author.push(author);
  }

  // método para encontrar o livro pelo nome
  findBookByName(bookName) {
    return this.#storage.books.find((b) => b.name === bookName);
  }

  // método para salvar o livro
  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  // adicionar e remover livro do estoque
  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addToStock(quantity); // adicionar no estoque todo livro que não resultar como undefined
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.removeToStock(quantity);
  }

  // reutilizar o método mas dessa vez para posters
  findPosterByName(posterName) {
    return this.#storage.posters.find((p) => p.name === posterName);
  }

  // salvar poster
  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name);
    if (!posterExists) {
      this.#storage.posters.push(poster);
    }
  }

  // adicionar e remover poster do estoque
  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.addToStock(quantity); // adicionar no estoque todo livro que não resultar como undefined
  }

  removeBooksFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.removeToStock(quantity);
  }

  // método para salvar usuário
  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  // método para salvar o pedido
  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  // método para exibir o storage ja que ele é privado
  showStorage() {
    console.table(this.#storage.author);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.orders.map((order) => order.data));
    console.table(this.#storage.users);
  }
};
