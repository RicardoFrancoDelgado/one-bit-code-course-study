/**
 * Criamos métodos e atributos em uma classe e podemos passa-los para outras
 * classes, usando o extends, isso vai fazer com que uma classe(filha) herde os
 * mesmos atributos e métodos que uma classe(mãe)
 * Quando criamos uma classe filha com um construtor precisamos levar em conside
 * ração a classe mãe então dentro do construtor temos os atributos da classe mãe
 * o super dentro de um construtor da classe filha faz com que reutilizamos os 
 * parametros da classe mãe na classe filha
 */

class Property {
  constructor(area, price) {
    this.area = area
    this.price = price
  }

  getPricerPerSquareMeter() {
    return this.price / this.area
  }
}

class House extends Property {
  constructor(address, number, area, price) {
    super(area, price)
    this.address = address
    this.number = number
  }
}

const land = new Property(200, 50000)
const someHouse = new House("Av. Cesário de Mello", 11801, 150, 200000)

const msg = someHouse instanceof Property === true ? 'sim' : 'não'
const msg2 = someHouse instanceof House === true ? 'sim' : 'não'

console.log(land)
console.log(someHouse)
console.log(`some house é instancia de property ? ${msg}`)
console.log(`some house é instancia de House ? ${msg2}`)

class Apartament extends Property {
  constructor(number, area, price) {
    super(area, price)
    this.number = number
  }

  getFloor() {
    return this.number.slice(0, -2)
  }
}

const apt = new Apartament("201", 100, 160000)
console.log(apt)
console.log(apt.getFloor())


