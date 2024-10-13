module.exports = class Deposit {
  constructor(value, creationDate = new Date()) {
    this.value = value;
    this.creationDate = creationDate;
  }
}
