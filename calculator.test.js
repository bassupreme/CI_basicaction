const {add, diff, mul, div} = require("./calculator");

test("addition of 4 and 6 to equal 10", () => {
  expect(add(4, 6)).toBe(10);
});

test("addition of 4 and 6 to equal -2", () => {
  expect(diff(4, 6)).toBe(-2);
});
