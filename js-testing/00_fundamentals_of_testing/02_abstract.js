const sum = (a, b) => a + b;
const subtract = (a, b) => a + b;

let result = sum(3, 7);
let expected = 10;

expect(result).toBe(expected);

result = subtract(7, 7);
expected = 0;

expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not ${expected}`);
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
