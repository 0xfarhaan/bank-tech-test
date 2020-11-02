let Account = require("./account.js");
let Printer = require("./printer.js");

class Bank {
  constructor(account = new Account(), printer = new Printer()) {
    this._header = "date || credit || debit || balance\n";
    this.printer = printer;
    this.account = account;
  }

  printStatement() {
    this.printer.print(this.account.returnTransactions());
  }

  deposit(amount) {
    this.account.transaction(amount);
  }

  withdraw(amount) {
    this.account.transaction(-amount);
  }

  getBalance() {
    return this.account.returnBalance();
  }
}
module.exports = Bank;
