import { Component } from "./Component.js";

export class Form extends Component {
  constructor(parent, options) {
    super('form', parent, options)
  }

  addChildren(...children) {
    //operador spread para criar os elementos filhos
    //um for each pra pegar todos os filhos  
    children.forEach(child => {
      // arrow function n tem um this
      // child será uma instancia de component
      this.getElement().appendChild(child.getElement())
    })
  }
}