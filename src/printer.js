class Printer {
  constructor() {
    this._header = "date || credit || debit || balance\n";
    this._divider = "||";
  }

  print(transactions) {
    console.log(this._formatTransactions(transactions));
  }
  // prettier-ignore
  _formatTransactions(transactions) {
    let toPrint = this._header;
    for (let i = transactions.length - 1; i >= 0; i--) {
      const element = transactions[i];
      if (element.credit) {
        toPrint += this._formatCreditLine([element.date, element.credit, element.balance,]);
      } else {
        toPrint += this._formatDebitLine([element.date, element.debit, element.balance,]);
      }
    }
    return toPrint;
  }
  // prettier-ignore
  _formatCreditLine(line) {
    return (line[0] + " " + this._divider + " " + line[1] + " " + this._divider + " " + this._divider+ " " + line[2] + "\n");
  }
  // prettier-ignore
  _formatDebitLine(line) {
    return (line[0] + " " + this._divider + " " + this._divider + " " + line[1] + " " + this._divider + " " + line[2] + "\n");
  }
}

module.exports = Printer;
