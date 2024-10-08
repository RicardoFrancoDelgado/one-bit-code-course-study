const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const elise = new Thief("Elise", 1278, 100, 60);
const lux = new Mage("Lux", 1560, 72, 75, 244);
const garen = new Warrior("Garen", 2000, 120, 95, 30, "attacking");

console.table({ elise, lux, garen });

function attack(enemy, target) {
  return enemy.attack(target);
}

attack(elise, lux);
attack(lux, elise);

console.table({ elise, lux, garen });
