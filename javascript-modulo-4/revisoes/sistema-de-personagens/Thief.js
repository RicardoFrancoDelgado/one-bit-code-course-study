const Character = require("./Character");

module.exports = class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifePts -=
      (this.attackPts - targetCharacter.deffensePts) * 2;
  }
};
