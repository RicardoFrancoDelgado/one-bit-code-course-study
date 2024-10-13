module.exports = class Installment {
  constructor(valueLoan, numberLoan, status) {
    this.valueLoan = valueLoan;
    this.numberLoan = numberLoan;
    this.status = "pending"; // pago ou não pago => pending ou paid
  }

  checkPaid() {
    this.status = "paid";
  }
};
