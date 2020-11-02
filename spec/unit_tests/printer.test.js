let Printer = require("../../src/printer");
let printer;

beforeEach(() => {
  printer = new Printer();
});

test("Prints an empty statement", () => {
  console.log = jest.fn();
  printer.print([]);
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance"
  );
});
