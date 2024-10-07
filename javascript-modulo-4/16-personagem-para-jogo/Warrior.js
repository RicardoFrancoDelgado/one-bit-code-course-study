const Character = require("./Character");

class Warrior extends Character {
  // warrior tem shield points
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.stance = "attacking";
  }

  // o warrior só ataca se estiver em posição de ataque
  attack(targetCharacter) {
    // verificar se está na posição de attack
    if (this.stance === "attacking") {
      super.attack(targetCharacter);
    }
  }

  switchStance() {
    // verificar se está atacando e mudar pra defesa e vice-versa
    // assim que ele mudar pra defesa vamos somar a defesa ao shield point
    // e quando sair da posição de defesa vamos subtrair os pontos de shield
    if (this.stance === "attacking") {
      this.stance = "defending";
      this.defensePts += this.shieldPts;
    } else {
      this.stance = "attacking";
      this.defensePts -= this.shieldPts;
    }
  }
}

module.exports = Warrior;
