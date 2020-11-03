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
  expect(account.transactions[0]).toStrictEqual({
    date: "02/11/2020",
    credit: 100,
    balance: 100,
  });
});

test("records a debit transaction", () => {
  account.transaction(-100);
  expect(account.transactions[0]).toStrictEqual({
    date: "02/11/2020",
    debit: 100,
    balance: -100,
  });
});

test("returns a list of empty transactions when called without any transactions", () => {
  expect(account.returnTransactions()).toStrictEqual([]);
});

test("returns the default balance of zero when called without transactions", () => {
  expect(account.returnBalance()).toStrictEqual(0);
});
