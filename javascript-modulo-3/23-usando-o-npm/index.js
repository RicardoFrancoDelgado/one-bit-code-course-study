/**
 * Dependencias de desenvolvimento são aquelas que precisamos enquanto estamos 
 * desenvolvendo uma aplicação
 * npm i --save-dev -> coloca uma dependencia como importante durante desenvolvimento
 * assim que a aplicação for subir a dependencia será retirada para que o programa
 * não fique tão pesado com código desnecessário
 */

const lodash = require("lodash")

console.log(lodash.isArray([]))
console.log(lodash.kebabCase("Ricardo Franco Delgado"))