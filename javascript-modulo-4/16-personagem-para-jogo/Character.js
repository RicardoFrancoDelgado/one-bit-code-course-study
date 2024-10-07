class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
  }

  // método para subtrair do character alvo os pontos de vida pegando o ataque e subtraindo pela defesa
  // ele vai subtrair o atack pela propria defesa
  // isso diz que: será um ataque de outra pessoa e nós vamos perder pontos de vida com isso
  attack(targetCharacter) {
    targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts;
  }
}



module.exports = Character;
