class Printer {
  constructor() {
    this._header = "date || credit || debit || balance";
    this._divider = "||";
  }

  print(transactions) {
    if (transactions.length == 0) {
      console.log(this._header);
    }
  }
}

module.exports = Printer;
