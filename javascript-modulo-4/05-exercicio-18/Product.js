class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity) {
    this.inStock += quantity
  }

  calculateDiscount(percentage) {
    this.price -= price * (percentage / 100)
  }
}

const name = 'Tablet Samsung Lite S6'
const description =
  'O Galaxy Tab S6 Lite é o seu companheiro de anotações super portátil. Com uma tela grande de 10,4 polegadas¹ em um design fino e leve, One UI 5.1 no Android 13, S Pen e capa protetora inclusas na caixa e pronto para uso. Seja para desenhar, aprender ou jogar, este é o tablet perfeito para você.'
const price = 3299

const tablet = new Product(name, description, price)

console.log(tablet) // -> começa com 0 no estoque

tablet.addToStock(10)
console.log(tablet) // -> adicionados 10 no estoque

tablet.calculateDiscount(10)
console.log(tablet)
