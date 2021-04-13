const fn2 = require("./fn2");

test("return to Object  name and age", () => {
  expect(fn2.makeUser("Mike", 30)).toBe({
    userName: "Mike",
    userAge: 30,
  });
});

test("return to Object name and age", () => {
  expect(fn2.makeUser("Mike", 30)).toEqual({
    userName: "Mike",
    userAge: 30,
  });
});

test("return to Object name and age", () => {
  expect(fn2.makeUser("Mike", 30)).toStrictEqual({
    userName: "Mike",
    userAge: 30,
  });
});
