let Account = require("../../src/account");
let account;

beforeEach(() => {
  account = new Account();
});

test("records a credit transaction", () => {
  account.transaction(100);
  expect(account.transactions[0]).toStrictEqual({
    date: "03/11/2020",
    credit: 100,
    balance: 100,
  });
});

test("records a debit transaction", () => {
  account.transaction(-100);
  expect(account.transactions[0]).toStrictEqual({
    date: "03/11/2020",
    debit: 100,
    balance: -100,
  });
});
