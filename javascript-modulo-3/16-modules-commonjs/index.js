const render = require('./render.js')
const store = require('./store.js')

console.log('Aplicação iniciada')
render()
store()
console.log('Aplicação encerrada')

/**
 * Exportamos o arquivo e depois importamos
 * n suportamos os módulos nos navegadores para rodar o console
 * 
 */