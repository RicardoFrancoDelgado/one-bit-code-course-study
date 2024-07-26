import { Component } from './Component.js'

export class Label extends Component {
  constructor(text, parent, options) {
    // criar um objeto novo {} junta os paramentros no objeto alvo vazio
    // atribuir as options e depois um objeto com a propriedade text
    super('label', parent, Object.assign({}, options, { textContent: text }))
  }
}
