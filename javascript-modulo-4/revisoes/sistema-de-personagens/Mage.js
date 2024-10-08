const Character = require("./Character");

module.exports = class Mage extends Character {
  constructor(name, lifePts, attackPts, deffensePts, magicPts) {
    super(name, lifePts, attackPts, deffensePts);
    this.magicPts = magicPts;
  }

  attack(targetCharacter) {
    targetCharacter.lifePts -=
      this.attackPts + this.magicPts - targetCharacter.deffensePts;
  }

  heal(targetCharacter) {
    targetCharacter += this.magicPts * 2;
  }
};
