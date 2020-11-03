class Account {
  constructor() {
    this._DEFAULT_BALANCE = 0;
    this._balance = this._DEFAULT_BALANCE;
    this._transactions = [];
  }

  returnTransactions() {
    return this._transactions;
  }

  returnBalance() {
    return this._balance;
  }

  transaction(amount) {
    amount = this._formatNumber(amount);
    this._balance = parseInt(amount) + parseInt(this._balance);
    this._balance = this._formatNumber(this._balance);
    if (amount > 0) {
      this._transactions.push({
        date: this._currentDate(),
        balance: this._balance,
        credit: amount,
      });
    }

    if (amount < 0) {
      this._transactions.push({
        date: this._currentDate(),
        balance: this._balance,
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
