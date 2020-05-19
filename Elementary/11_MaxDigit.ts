import * as assert from "assert"

function maxDigit(value: number): number {
    return Math.max(...`${value}`.split("").map(Number))
}

const maxDigit2 = (value: number): number => Math.max(...`${value}`.split("").map(Number))

assert.deepEqual(maxDigit(0), 0)
assert.deepEqual(maxDigit(52), 5)
assert.deepEqual(maxDigit(634), 6)
assert.deepEqual(maxDigit(1), 1)
assert.deepEqual(maxDigit(10000), 1)