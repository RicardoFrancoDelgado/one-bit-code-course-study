export class Component {
  //atributo privado iniciando como nulo
  #element = null

  //criar um elemento com um construtor passando tag, parent, e atributos adicionais
  constructor(tag, parent, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build() // método pra criar a tag
  }

  // método pra acessar o this.#element de forma publica
  getElement() {
    return this.#element
  }

  //cria a tag pegando o elemento e passando a tag
  //
  build() {
    this.#element = document.createElement(this.tag)
    //método estático passando o alvo e o elemento que vai ser passado
    Object.assign(this.#element, this.options)
    //retorna a própria instânncia
    return this
  }

  // método pra fazer o elemento aparecer na tela
  render() {
    // intancia de component
    if (this.parent instanceof Component) {
      //this.#element do construtor no getElement
      this.parent.getElement().append(this.#element)
    } else {
      // string passada
      document.querySelector(this.parent).append(this.#element)
    }
  }
}
