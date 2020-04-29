import * as assert from "assert"

function multTwo(a: number, b: number): number {
    return Math.imul(a, b)
}

assert.deepEqual(multTwo(3, 2), 6)
assert.deepEqual(multTwo(0, 1), 0)