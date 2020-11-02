let Bank = require("../../src/bank");
let bank;

beforeEach(() => {
  bank = new Bank();
});

test("expects account balance to start at zero", () => {
  expect(bank.balance).toStrictEqual(0);
});

test("expect an account with no transactions to return a empty statement", () => {
  expect(bank.printStatement()).toStrictEqual(
    "date || credit || debit || balance"
  );
});
