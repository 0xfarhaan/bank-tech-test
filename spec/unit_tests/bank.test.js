let Bank = require("../../src/bank");
let bank;

beforeEach(() => {
  bank = new Bank();
});

test("expects account balance to start at zero", () => {
  expect(bank.getBalance()).toStrictEqual(0);
});

test("expect an account with no transactions to return a empty statement", () => {
  console.log = jest.fn();
  bank.printStatement();
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance\n"
  );
});

test("user makes a deposit into their account", () => {
  bank.deposit(100);
  expect(bank.getBalance()).toBe(100);
});

test("user can make withdrawal from their account if it has money in it", () => {
  bank.deposit(100);
  bank.withdraw(50);
  expect(bank.getBalance()).toBe(50);
});
