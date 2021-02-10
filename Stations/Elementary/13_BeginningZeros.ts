import * as assert from "assert"

function beginningZeros(text: string): number {
    return text.match(/\b0+/g)?.[0].length || 0
}

const beginningZeros2 = (text: string): number => text.match(/\b0+/g)?.[0].length || 0

assert.deepEqual(beginningZeros("100"), 0)
assert.deepEqual(beginningZeros("001"), 2)
assert.deepEqual(beginningZeros("100100"), 0)
assert.deepEqual(beginningZeros("001001"), 2)
assert.deepEqual(beginningZeros("012345679"), 1)
assert.deepEqual(beginningZeros("0000"), 4)