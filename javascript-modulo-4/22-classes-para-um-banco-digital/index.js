const App = require("./App");
// TESTE: Criando usuários e testando o sistema
const user1 = App.createUser("João Silva", "joao@gmail.com");
const user2 = App.createUser("Maria Souza", "maria@gmail.com");

user1.account.makeDeposit(500);
user1.account.makeLoan(1000, 12);
user1.account.makeTransfer(user2, 200);

App.showAllData();
