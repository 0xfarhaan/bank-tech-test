class Printer {
  constructor() {
    this._header = "date || credit || debit || balance\n";
    this._divider = "||";
  }

  print(transactions) {
    if (transactions.length == 0) {
      console.log(this._header);
    } else {
      let toPrint = this._header;
      for (let i = 0; i < transactions.length; i++) {
        const element = transactions[i];
        if (element.credit) {
          toPrint += element.date + " " + this._divider;
          toPrint += " " + element.credit + " " + this._divider;
          toPrint += " " + this._divider;
          toPrint += " " + element.balance + "\n";
        } else {
          toPrint += element.date + " " + this._divider;
          toPrint += " " + this._divider;
          toPrint += " " + element.debit + " " + this._divider;
          toPrint += " " + element.balance + "\n";
        }
      }
      console.log(toPrint);
    }
  }
}

module.exports = Printer;
