const Product = require("./Product");

module.exports = class Poster extends Productuct {
  constructor(name, description, height, width, price, inStock = 0) {
    super(name, description, price, inStock);
    this.height = height
    this.width = width
  }
};
