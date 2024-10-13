module.exports = class Transfer {
  constructor(sender, receiver, value, creationDate = new Date()) {
    this.sender = sender;
    this.receiver = receiver;
    this.value = value;
    this.creationDate = creationDate;
  }
};
