import * as assert from "assert"

function easyUnpack(values: number[]): number[] {
    //return [values.shift(), values[1], values[values.length - 2]]
    return [values.shift(), values[1], (values.length > 3 && values.pop() || values.pop()) ? values.pop() : values.pop()]
}

assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7])
assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1])
assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3])