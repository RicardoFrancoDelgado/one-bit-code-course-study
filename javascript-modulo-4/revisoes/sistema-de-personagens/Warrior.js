const Character = require("./Character");

module.exports = class Warrior extends Character {
  constructor(name, lifePts, attackPts, deffensePts, shieldPts, stance) {
    super(name, lifePts, attackPts, deffensePts);
    this.shieldPts = shieldPts;
    this.stance = "attacking";
  }

  attack(targetCharacter) {
    if (this.stance === "attacking") {
      super.attack(targetCharacter);
    }
  }

  switchStance() {
    if (this.stance === "attacking") {
      this.stance = "deffending";
      this.deffensePts += this.shieldPts;
    } else {
      this.stance = "attacking";
      this.deffensePts -= this.shieldPts;
    }
  }
};
