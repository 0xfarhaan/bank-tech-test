class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  returnTransactions() {
    return this.transactions;
  }

  returnBalance() {
    return this.balance;
  }

  transaction(amount) {
    this.balance += amount;
    if (amount > 0) {
      this.transactions.push({
        date: this._currentDate(),
        balance: this.balance,
        credit: amount,
      });
    }

    if (amount < 0) {
      this.transactions.push({
        date: this._currentDate(),
        balance: this.balance,
        debit: Math.abs(amount),
      });
    }
  }

  _currentDate() {
    return new Date().toLocaleString("en-gb", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  }
}
module.exports = Account;
