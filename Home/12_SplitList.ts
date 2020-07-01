import * as assert from "assert"

function splitList(values: number[]): number[][] {
    return [values.slice(0, Math.ceil(values.length / 2)), values.slice(Math.ceil(values.length / 2))]
}

assert.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]])
assert.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]])
assert.deepEqual(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]])
assert.deepEqual(splitList([1]), [[1], []])
assert.deepEqual(splitList([]), [[], []])