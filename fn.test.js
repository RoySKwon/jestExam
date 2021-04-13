const { makeUser } = require("./fn");
const fn = require("./fn");

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("2 plus 3 is 5", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("4 plus 5 ist 10", () => {
  expect(fn.add(4, 5)).toBe(10);
});

test("5 plut 6 is 10", () => {
  expect(fn.add(5, 6)).not.toBe(10);
});

test("2 plus 3 is 5", () => {
  expect(fn.add(2, 3)).toBe(5);
});

//matcher
test("2 plus 3 is 5", () => {
  expect(fn.add(2, 3)).toEqual(5);
});
