import { Component } from './Component.js'

export class Input extends Component {
  constructor(parent, options) {
    // não precisa especificar a tag, pode ser passado manualmente a tag input
    super('input', parent, options)
  }
}
