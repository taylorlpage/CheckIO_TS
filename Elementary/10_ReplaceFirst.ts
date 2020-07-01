import * as assert from "assert"

function replaceFirst(values: number[]): number[] {
    return values.splice(1).concat(values.shift() || [])
}

const replaceFirst2 = (values: number[]): number[] => values.splice(1).concat(values)

assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1])
assert.deepEqual(replaceFirst([1]), [1])
assert.deepEqual(replaceFirst([]), [])