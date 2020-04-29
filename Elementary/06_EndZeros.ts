import * as assert from "assert"

function endZeros(value: number): number {
    return value % 10 ? 0 : `${value}`.match(/0+$/)[0].length
}

const endZeros2 = (value: number): number => value % 10 ? 0 : `${value}`.match(/0+$/)[0].length

assert.deepEqual(endZeros(0), 1)
assert.deepEqual(endZeros(1), 0)
assert.deepEqual(endZeros(100), 2)
assert.deepEqual(endZeros(101), 0)

assert.deepEqual(endZeros2(0), 1)
assert.deepEqual(endZeros2(1), 0)
assert.deepEqual(endZeros2(10), 1)
assert.deepEqual(endZeros2(101), 0)