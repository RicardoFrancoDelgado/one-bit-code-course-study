/**
 * NPX => executar as lib pela linha de comando
 * como saber quais são executaveis? doc/pasta - nodemodules
 * sripts do npm => executar qualquer procedimento / outro comando
 * não necessariamente precisamos do npm na linha de comando
 * e então executamos com o npm run "nome do teste"
 */

const HelloWorldNPM = require('hello-world-npm')

console.log(`Executando ${HelloWorldNPM()}`)