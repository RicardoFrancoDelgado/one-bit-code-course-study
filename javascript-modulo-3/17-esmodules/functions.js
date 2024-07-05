export const name = "Ricardo"

export function label(attributes) {
  const element = document.createElement('label')
  Object.assign(element, attributes)
  return element
}

export function input(attributes) {
  const element = document.createElement('input')
  Object.assign(element, attributes)
  return element
}

export function br() {
  const element = document.createElement('br')
  return element
}

/**
 * palavra reservada export no que for separado para ser exportado
 * o arquivo que for importar precisa declarar o import
 * ex: import { elements } from './path'
 * na tag script do html declaramos o tipo de aplicação como module
 * ex: type="modules", assim o navegador que a aplicação está modularizada
 */