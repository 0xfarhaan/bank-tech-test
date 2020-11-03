class Account {
  constructor() {
    this.DEFAULT_BALANCE = 0;
    this.balance = this.DEFAULT_BALANCE;
    this.transactions = [];
  }

  returnTransactions() {
    return this.transactions;
  }

  returnBalance() {
    return this.balance;
  }

  transaction(amount) {
    amount = this._formatNumber(amount);
    this.balance = parseInt(amount) + parseInt(this.balance);
    this.balance = this._formatNumber(this.balance);
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
        debit: Math.abs(amount).toFixed(2),
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

  _formatNumber(amount) {
    return amount.toFixed(2);
  }
}
module.exports = Account;
