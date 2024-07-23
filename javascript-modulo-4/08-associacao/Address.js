class Address {
  constructor(street, number, complement, neighborhood, state) {
    this.street = street
    this.number = number
    this.complement = complement
    this.neighborhood = neighborhood
    this.state = state
  }

  fullAddress() {
    return `${this.street},n° ${this.number}, ${this.complement}, ${this.neighborhood}/${this.state}`
  }
}

module.exports = Address