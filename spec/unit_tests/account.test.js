let Account = require("../../src/account");
let account;

beforeEach(() => {
  account = new Account();
});

test("records a credit transaction", () => {
  expect(account.transaction(100)).toStrictEqual({
    date: "02/11/2020",
    credit: 100,
    balance: 100,
  });
});
