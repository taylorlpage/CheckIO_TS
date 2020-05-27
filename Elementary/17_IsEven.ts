import * as assert from "assert"

function isEven(num: number): boolean {
    return !(num % 2)
}

const isEven2 = (num: number): boolean => !(num % 2)

assert.deepEqual(isEven(2), true)
assert.deepEqual(isEven(5), false)
assert.deepEqual(isEven(0), true)