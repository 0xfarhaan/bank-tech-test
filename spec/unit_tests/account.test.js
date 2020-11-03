let Account = require("../../src/account");
let account;

const globalDate = Date;

beforeEach(() => {
  account = new Account();
  const mockDate = new Date("02 Nov 2020");
  global.Date = jest.fn().mockImplementation(() => mockDate); // mock Date "new" constructor
  global.Date.now = jest.fn().mockReturnValue(mockDate.valueOf()); // mock Date.now
});

test("records a credit transaction", () => {
  account.transaction(100);
  let amount = 100;
  amount = amount.toFixed(2);
  expect(account._transactions[0]).toStrictEqual({
    date: "02/11/2020",
    credit: amount,
    balance: amount,
  });
});

test("records a debit transaction", () => {
  account.transaction(-100);
  let debit = 100;
  debit = debit.toFixed(2);
  let balance = -100;
  balance = balance.toFixed(2);
  expect(account._transactions[0]).toStrictEqual({
    date: "02/11/2020",
    debit: debit,
    balance: balance,
  });
});

test("returns a list of empty transactions when called without any transactions", () => {
  expect(account.returnTransactions()).toStrictEqual([]);
});

test("returns the default balance of zero when called without transactions", () => {
  expect(account.returnBalance()).toStrictEqual(0);
});
