let Bank = require("../../src/bank");
let bank;

beforeEach(() => {
  bank = new Bank();
});

test("expects account balance to start at zero", () => {
  expect(bank.balance).toStrictEqual(0);
});
