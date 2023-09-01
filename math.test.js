const { Plus, Minus, Multi,Divide } = require("./math");

test("Plus add two numbers", () => {
  expect(Plus(1,2)).toBe(3);
});

test("Minus add two numbers", () => {
    expect(Minus(5,4)).toBe(1);
  });

test("Multi add two numbers", () => {
    expect(Multi(1,2)).toBe(2);
});

test("Divide add two numbers", () => {
    expect(Divide(2,1)).toBe(2);
  });