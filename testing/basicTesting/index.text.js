const assert = require("assert");

const { forEach, map } = require("./index");
const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {...obj1}
it("Testing of forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Expected forEach to sum the array");
  // assert.strictEqual(obj1, obj2);
  assert.deepEqual(obj1, obj2);
});

it.skip("Testing of map function", () => {
  const res = map([1, 2, 3], (value) => {
    return value * 2;
  });

  assert.deepStrictEqual(res, [2, 4, 6]);
});
