const Character = require("./Character");

// a classe thief toma dano dobrado então o calculo é o mesmo porém ele toma dano dobrado
class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifePts -=
      (this.attackPts - targetCharacter.defensePts) * 2;
  }
}

module.exports = Thief;
