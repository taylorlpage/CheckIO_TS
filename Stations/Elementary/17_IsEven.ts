import * as assert from "assert";

function isEven(num: number): boolean {
  return !(num % 2);
}

//const isEven = (num: number): boolean => !(num % 2)

assert.deepStrictEqual(isEven(2), true)
assert.deepStrictEqual(isEven(5), false)
assert.deepStrictEqual(isEven(0), true)
