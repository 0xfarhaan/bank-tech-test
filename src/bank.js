class Bank {
  constructor() {
    this.balance = 0;
    this._header = "date || credit || debit || balance\n";
  }

  printStatement() {
    console.log(this._header);
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
module.exports = Bank;
