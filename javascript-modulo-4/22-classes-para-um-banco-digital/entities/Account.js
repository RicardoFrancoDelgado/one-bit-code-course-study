const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

module.exports = class Account {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }

  get balance() {
    return this.#balance;
  }

  makeDeposit(value) {
    const deposit = new Deposit(value);
    this.deposits.push(deposit);
    this.#balance += value;
  }

  makeLoan(value, installmentsCount) {
    const loan = new Loan(value, installmentsCount);
    this.loans.push(loan);
    this.#balance += value;
  }

  makeTransfer(receiver, value) {
    if (this.#balance >= value) {
      const transfer = new Transfer(this.owner, receiver, value);
      this.transfers.push(transfer);
      this.#balance -= value;
      receiver.account.receiveTransfer(transfer);
    } else {
      console.log("Saldo insuficiente para a transferência.");
    }
  }

  receiveTransfer(transfer) {
    this.#balance += transfer.value;
    this.transfers.push(transfer);
  }
};
