module.exports = class Character {
  constructor(name, lifePts, attackPts, deffensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.deffensePts = deffensePts;
  }

  attack(targetCharacter) {
    targetCharacter.lifePts -= this.attackPts - targetCharacter.deffensePts;
  }
};
