async function test(title, callback) {
  try {
    await callback();
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

global.test = test;
global.expect = expect;
