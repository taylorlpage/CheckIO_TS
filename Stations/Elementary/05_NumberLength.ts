import * as assert from "assert"

function numberLength(value: number): number {
    return value.toString().length
}

assert.deepEqual(numberLength(10), 2)
assert.deepEqual(numberLength(0), 1)
assert.deepEqual(numberLength(4), 1)
assert.deepEqual(numberLength(44), 2)