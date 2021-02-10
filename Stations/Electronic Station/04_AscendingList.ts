import * as assert from "assert";

function isAscending(values: number[]): boolean {
    return values.slice(1).map((v,i) => v > values[i]).every(Boolean)
}

assert.deepEqual(isAscending([-5, 10, 99, 123456]), true)
assert.deepEqual(isAscending([99]), true)
assert.deepEqual(isAscending([4, 5, 6, 7, 3, 7, 9]), false)
assert.deepEqual(isAscending([]), true)
assert.deepEqual(isAscending([1, 1, 1, 1]), false)