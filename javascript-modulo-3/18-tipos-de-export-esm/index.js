import { inline } from './inline.js'
import defaultInline from './inline.js'
import exportDefault, { group, a, b, c, d } from './non-inline.js'

inline()
defaultInline()

group()
exportDefault()

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

/**
 * export nomeado e inline
 * caso queira renomear o método basta passar o as
 * ex: import { inline as i } from "./path"
 * 
 * export default
 * no import não precisa das chaves
 * pode ser renomeado da forma que preferir
 * só pode ter um por arquivo
 */

/**
 * Podemos importar os dois do mesmo arquivo na mesma linha
 * ex: import defaultFuntion, { functionExport } from "./path"
 */