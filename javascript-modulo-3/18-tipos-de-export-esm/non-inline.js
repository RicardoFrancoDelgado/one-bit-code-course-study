function group() {
  console.log('Export nomeado não-inline (agrupado)')
}

function a() {}
function b() {}
function c() {}
function d() {}

function exportDefault() {
  console.log('Export default não-inline')
}

export { group, a, b, c, d }
export default exportDefault

/**
 * export separado
 * podemos passar entre chaves e agrupar os exports finais 
 * ou caso queira organizar de maneira diferente somente passamos entre chaves
 * o export desejadi
 * 
 * export default também pode ser usado separado
 * ex: export default functionName
 * sem o uso das chaves apenas refereniando a função
 */
