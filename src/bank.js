let Account = require("./account.js");
let Printer = require("./printer.js");

class Bank {
  constructor(account = new Account(), printer = new Printer()) {
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

  _getBalance() {
    return this.account.returnBalance();
  }
}
module.exports = Bank;
