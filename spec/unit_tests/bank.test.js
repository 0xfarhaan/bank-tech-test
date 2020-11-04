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
  expect(account.transaction).toHaveBeenCalled();
});

test("user can make withdrawal from their account", () => {
  bank.withdraw(50);
  expect(account.transaction).toHaveBeenCalled();
});
