const Installment = require("./Installment");

module.exports = class Loan {
  static #interestRate = 0.05;

  constructor(value, installmentsCount, creationDate = new Date()) {
    this.value = value;
    this.creationDate = creationDate;
    this.installments = [];
    this.generateInstallments(installmentsCount);
  }

  generateInstallments(installmentsCount) {
    const installmentValue =
      (this.value * (1 + Loan.#interestRate)) / installmentsCount;
    for (let i = 0; i < installmentsCount; i++) {
      this.installments.push({
        number: i + 1,
        value: installmentValue,
        status: "pending",
      });
    }
  }

  static getInterestRate() {
    return Loan.#interestRate;
  }

  static setInterestRate(newRate) {
    Loan.#interestRate = newRate;
  }
};
