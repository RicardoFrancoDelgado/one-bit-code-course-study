/**
 * Estados das promises
 * pendente - pending
 * resolvida - resolved
 * rejeitada - rejected
 * 
 * Promises são usadas 99% das vezes em funções
 */

function execute() {
  // faz alguma coisa...
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo resolvida")
    setTimeout(() => {
      resolve(`Resultado ${true}`)
    }, 2000)
  })
}

const p = execute()
console.log(p)

setTimeout(() => {
  console.log(p)
}, 3000)