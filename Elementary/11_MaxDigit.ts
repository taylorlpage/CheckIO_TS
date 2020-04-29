import * as assert from "assert"

function maxDigit(value: number): number {
    return Math.max(...`${value}`.split("").map(Number))
}

const maxDigit2 = (value: number): number => Math.max(...`${value}`.split("").map(Number))

assert.equal(maxDigit(0), 0)
assert.equal(maxDigit(52), 5)
assert.equal(maxDigit(634), 6)
assert.equal(maxDigit(1), 1)
assert.equal(maxDigit(10000), 1)