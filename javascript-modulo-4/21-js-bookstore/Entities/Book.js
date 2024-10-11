const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    // não referenciamos no this os atributos que ja estão em super e não queremos sobrescrever
    super(`Livro: ${title}`, description, price, inStock);
    this.title = title;
    this.synopsis = synopsis;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
};