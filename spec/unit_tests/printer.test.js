let Printer = require("../../src/printer");
let printer;

beforeEach(() => {
  printer = new Printer();
});

test("Prints an empty statement", () => {
  console.log = jest.fn();
  printer.print([]);
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance\n"
  );
});

test("Prints an statement with one credit transaction", () => {
  console.log = jest.fn();
  printer.print([
    {
      date: "02/11/2020",
      credit: (10.0).toFixed(2),
      balance: (10.0).toFixed(2),
    },
  ]);
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance\n02/11/2020 || 10.00 || || 10.00\n"
  );
});

test("Prints a statement with one debit transaction", () => {
  console.log = jest.fn();
  printer.print([
    {
      date: "02/11/2020",
      debit: (12.0).toFixed(2),
      balance: (10.0).toFixed(2),
    },
  ]);
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance\n02/11/2020 || || 12.00 || 10.00\n"
  );
});

test("Prints a statement with one credit and one debit transaction and the right order", () => {
  console.log = jest.fn();
  printer.print([
    {
      date: "02/11/2020",
      credit: (10.0).toFixed(2),
      balance: (10.0).toFixed(2),
    },
    {
      date: "02/11/2020",
      debit: (12.0).toFixed(2),
      balance: (10.0).toFixed(2),
    },
  ]);
  expect(console.log).toHaveBeenCalledWith(
    "date || credit || debit || balance\n02/11/2020 || || 12.00 || 10.00\n02/11/2020 || 10.00 || || 10.00\n"
  );
});
