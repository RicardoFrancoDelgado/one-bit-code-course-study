// Cálculo de Dano
// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

//Escreva um programa que permita inserir o nome e o poder de ataque de um personagem
const atacante = prompt('Insira o nome do atacante')
const poderDeAtaque = parseFloat(
  prompt('Insira o valor de poder do seu atacante')
)

const defensor = prompt('Insira o nome do defensor')
let pontosDeVida = parseFloat(prompt('Quantos pontos de vida ele possui?'))
const poderDeDefesa = parseFloat(prompt('Insira o valor de defesa do defensor'))
const possuiEscudo = prompt('Possui escudo ? (S/N)')

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'N') {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'S') {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`)
alert(`
${atacante}
Poder de ataque: ${poderDeAtaque}

${defensor}
Pontos de vida: ${pontosDeVida}
Poder de defesa: ${poderDeDefesa}
Possui escudo: ${possuiEscudo}
`)
