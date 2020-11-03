let Bank = require("../../src/bank");
let bank;
let account;
let printer;
let Account;
let Printer;

beforeEach(() => {
  jest.mock("../../src/account");
  jest.mock("../../src/printer");
  Account = require("../../src/account");
  Printer = require("../../src/printer");
  account = new Account();
  printer = new Printer();
  bank = new Bank(account, printer);
});

test("expects account balance to start at zero", () => {
  account.returnBalance.mockImplementation(() => 0);
  expect(bank._getBalance()).toStrictEqual(0);
});

test("expect an account with no transactions to return a empty statement", () => {
  console.log = jest.fn();
  printer.print.mockImplementation(() =>
    console.log("date || credit || debit || balance\n")
  );
  bank.printStatement();
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance\n"
  );
});

test("user makes a deposit into their account", () => {
  bank.deposit(100);
  account.returnBalance.mockImplementation(() => 100.0);
  expect(bank._getBalance()).toBe(100.0);
});

test("user can make withdrawal from their account if it has money in it", () => {
  bank.deposit(100);
  bank.withdraw(50);
  account.returnBalance.mockImplementation(() => 50.0);
  expect(bank._getBalance()).toBe(50.0);
});
