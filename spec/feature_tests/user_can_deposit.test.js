let Bank = require("../../src/bank");
let bank;

beforeEach(() => {
  bank = new Bank();
  const mockDate = new Date("02 Nov 2020");
  global.Date = jest.fn().mockImplementation(() => mockDate); // mock Date "new" constructor
  global.Date.now = jest.fn().mockReturnValue(mockDate.valueOf()); // mock Date.now
});

test("User can deposit money and see it on their statement", () => {
  bank.deposit(100);
  console.log = jest.fn();
  bank.printStatement();
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance\n02/11/2020 || 100.00 || || 100.00\n"
  );
});

test("User can deposit and withdraw money and see it on their statement", () => {
  bank.deposit(100);
  bank.withdraw(50);
  console.log = jest.fn();
  bank.printStatement();
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance\n02/11/2020 || || 50.00 || 50.00\n02/11/2020 || 100.00 || || 100.00\n"
  );
});
