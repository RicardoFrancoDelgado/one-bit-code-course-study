const User = require("./entities/User");

module.exports = class App {
  static #users = [];

  static createUser(name, email) {
    const existingUser = this.#users.find((user) => user.email === email);
    if (!existingUser) {
      const user = new User(name, email);
      this.#users.push(user);
      return user;
    } else {
      console.log("Email já cadastrado.");
    }
  }

  static findUserByEmail(email) {
    return this.#users.find((user) => user.email === email);
  }

  static showAllData() {
    this.#users.forEach((user) => {
      console.log(`Usuário: ${user.name}, Email: ${user.email}`);

      console.table([
        {
          Saldo: user.account.balance,
        },
      ]);

      if (user.account.deposits.length > 0) {
        console.log("Depósitos:");
        const depositData = user.account.deposits.map((deposit, index) => ({
          Número: index + 1,
          Valor: deposit.value,
          Data: deposit.creationDate.toLocaleString(),
        }));
        console.table(depositData);
      }

      if (user.account.loans.length > 0) {
        console.log("Empréstimos:");
        user.account.loans.forEach((loan, loanIndex) => {
          const loanData = [
            {
              Valor: loan.value,
              Data: loan.creationDate.toLocaleString(),
              Parcelas: loan.installments.length,
            },
          ];
          console.table(loanData);

          const installmentsData = loan.installments.map(
            (installment, index) => ({
              Parcela: index + 1,
              Valor: installment.value.toFixed(2),
              Status: installment.status,
            })
          );
          console.log("Parcelas:");
          console.table(installmentsData);
        });
      }

      if (user.account.transfers.length > 0) {
        console.log("Transferências:");
        const transferData = user.account.transfers.map((transfer, index) => ({
          Número: index + 1,
          EnviadoPor: transfer.sender.name,
          RecebidoPor: transfer.receiver.name,
          Valor: transfer.value,
          Data: transfer.creationDate.toLocaleString(),
        }));
        console.table(transferData);
      }

      console.log("--------------------------------------------------");
    });
  }
};
