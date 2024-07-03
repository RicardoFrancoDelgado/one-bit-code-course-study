/**
 * spread = espalhar
 * os elementos de um objeto iterável
 * 1. passar vários parametros
 * 2. clonar objetos iteráveis
 * 3. fazer manipulações sem afetar o objeto original
 * 4. transformar strings em arrays
 */

let str = 'Olá, mundo'
console.log(...str) // O l á ,  m u n d o
let arr = [4, 2, 8, 3, 1]
console.log(...arr)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')
console.log({ towns, townsCopy })

const townsClone = [...towns]
townsClone.push('Aldebaran')
console.log({ towns, townsCopy, townsClone })

const townsObject = {...towns}
const townsObjectClone = {...townsObject}

townsObjectClone.test = "Test"
console.log({townsObject, townsObjectClone})