export class Component {
  #element = null

  constructor(tag, parent, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }

  getElement() {
    return this.#element
  }

  build() {
    this.#element = document.createElement(this.tag)
    //associar ao elemento os atributos adicionais
    Object.assign(this.#element, this.options)
    return this
    // this => a própria instância
  }

  render() {
    if (this.parent instanceof Component) {
      //this.#element do construtor no getElement
      this.parent.getElement().append(this.#element)
    } else {
      // string passada
      document.querySelector(this.parent).append(this.#element)
    }
  }
}
