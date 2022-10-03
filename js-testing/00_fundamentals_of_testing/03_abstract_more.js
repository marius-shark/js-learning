const sum = (a, b) => a + b;
const subtract = (a, b) => a + b;

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 7);
  const expected = 0;

  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`☑️ ${title}`);
  } catch (error) {
    console.error(`x ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not ${expected}`);
      }
    },
    toEqual(expected) {
      /* implementing a deep equality check */
    },
    toBeGreaterThan(expected) {
      /* implementing some other checks */
    },
  };
}
