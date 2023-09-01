const { Plus, Minus, Multi,Divide } = require("./math");

test("Plus add two numbers", () => {
    const result = Plus(30, 30)
    const expected = 60;
    expected(result).toBe(expected);
});

test("Minus add two numbers", () => {
    const result = Minus(30, 30)
    const expected = 0;
    expected(result).toBe(expected);
});

test("Multi add two numbers", () => {
    const result = Multi(20, 30)
    const expected = 600;
    expected(result).toBe(expected);
});

test("Divide add two numbers", () => {
    const result = Divide(60, 2)
    const expected = 30;
    expected(result).toBe(expected);
});