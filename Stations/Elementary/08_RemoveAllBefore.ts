import * as assert from "assert"

function removeAllBefore(values: number[], b: number): number[] {
    return values.includes(b) ? values.slice(values.indexOf(b)) : values
}

const removeAllBefore2 = (values: number[], b: number): number[] => values.includes(b) ? values.slice(values.indexOf(b)) : values

assert.deepEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5])
assert.deepEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3])
assert.deepEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4])
assert.deepEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7])
assert.deepEqual(removeAllBefore([], 0), [])
assert.deepEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [7, 7, 7, 7, 7, 7, 7, 7, 7])