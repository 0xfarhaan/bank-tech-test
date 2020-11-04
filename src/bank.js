let Account = require("./account.js");
let Printer = require("./printer.js");

class Bank {
  constructor(account = new Account(), printer = new Printer()) {
    this._printer = printer;
    this._account = account;
  }

  printStatement() {
    this._printer.print(this._account.returnTransactions());
  }

  deposit(amount) {
    this._account.transaction(amount);
  }

  withdraw(amount) {
    this._account.transaction(-amount);
  }
}
module.exports = Bank;
