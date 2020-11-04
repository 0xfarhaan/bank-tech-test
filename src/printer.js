class Printer {
  constructor() {
    this._header = "date || credit || debit || balance\n";
    this._divider = "||";
  }

  print(transactions) {
    console.log(this._formatTransactions(transactions));
  }

  _formatTransactions(transactions) {
    let toPrint = this._header;
    for (let i = transactions.length - 1; i >= 0; i--) {
      const element = transactions[i];
      if (element.credit) {
        toPrint +=
          element.date +
          " " +
          this._divider +
          " " +
          element.credit +
          " " +
          this._divider +
          " " +
          this._divider +
          " " +
          element.balance +
          "\n";
      } else {
        toPrint +=
          element.date +
          " " +
          this._divider +
          " " +
          this._divider +
          " " +
          element.debit +
          " " +
          this._divider +
          " " +
          element.balance +
          "\n";
      }
    }
    return toPrint;
  }
}

module.exports = Printer;
