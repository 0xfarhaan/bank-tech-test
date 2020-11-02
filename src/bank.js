class Bank {
  constructor() {
    this.balance = 0;
    this._header = "date || credit || debit || balance";
  }

  printStatement() {
    return this._header;
  }
}
module.exports = Bank;
