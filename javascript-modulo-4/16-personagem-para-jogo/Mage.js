const Character = require("./Character");

class Mage extends Character {
  // na classe mage precisamos rescrever o construtor por que temos atributos a mais
  constructor(name, lifePts, attackPts, defensePts, magicPts) {
    super(name, lifePts, attackPts, defensePts);
    this.magicPts = magicPts;
  }

  // o attack do mage é contabilizado pela adição de dano + magia entao primeiro somamos e depois subtraimos pelos pontos de defesa
  attack(targetCharacter) {
    targetCharacter.lifePts -=
      this.attackPts + this.magicPts - targetCharacter.defensePts;
  }

  // mage também tem o método de healling
  // pegamos o life points e atribuimos os pontos de magia * 2
  heal(targetCharacter) {
    targetCharacter.lifePts += this.magicPts * 2;
  }
}

module.exports = Mage;
