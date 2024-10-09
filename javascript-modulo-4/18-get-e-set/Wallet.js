class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100;
    console.log(this.#amount);
  }

  // palavra reservada do JS para ter um getter
  get amount() {
    return this.#amount / 100;
  }

  //poderiamos fazer isso com um método
  //mas temos que colocar () na hora de referenciar o método
  getAmount() {
    return this.#amount / 100;
  }

  // set para mudarmos a propriedade de username
  set username(newUsername) {
    if (typeof newUsername === 'string') {
      this.#username = newUsername;
    } else {
      console.log("Username must be of type string")
    }
  }

  // logo após criamos um get para coletar esse username
  get username() {
    return this.#username;
  }
}

const nuWallet = new Wallet();
console.log(nuWallet.amount);
console.log(nuWallet.getAmount());

nuWallet.username = 1900; // Username must be of type string
nuWallet.username = "Ricardo";
console.log(nuWallet.username);
