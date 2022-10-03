const { sumAsync, subtractAsync } = require("./maths");

test("sum adds numbers", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await subtractAsync(7, 7);
  const expected = 0;

  expect(result).toBe(expected);
});
