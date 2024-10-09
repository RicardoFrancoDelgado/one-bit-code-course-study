class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`Base fee is ${Reservation.baseFee}`);
  }

  static get premiumFree() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();
console.log(`Premium fee is $${Reservation.premiumFree}`);

const r1 = new Reservation(3, "219", 3);
const r2 = new Reservation(5, "180", 2);
console.table({ r1, r2 });

Reservation.baseFee = 200


const r3 = new Reservation(3, "220", 3);
const r4 = new Reservation(5, "200", 2);
console.log(`Premium fee is $${Reservation.premiumFree}`);

console.table({ r3, r4 });