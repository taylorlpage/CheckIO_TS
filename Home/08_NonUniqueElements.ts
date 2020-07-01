import * as assert from "assert"

function nonUniqueElements(data: number[]): number[] {
    return data.filter(d => data.indexOf(d) !== data.lastIndexOf(d))
}


assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3])
assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [])
assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5])
assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9])