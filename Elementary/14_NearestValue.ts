import * as assert from "assert"

function nearestValue(values: number[], search: number): number {
    const numberSorter = (a: number, b: number) => (a - search) - (b - search)
    const nearestGrab = (a: number, b: number) => Math.abs(a - search) - Math.abs(b - search)
    return values.sort(numberSorter).sort(nearestGrab).shift()
}

assert.deepEqual(nearestValue([4, 7, 10, 11, 12, 17], 9), 10)
assert.deepEqual(nearestValue([4, 7, 10, 11, 12, 17], 8), 7)
assert.deepEqual(nearestValue([4, 8, 10, 11, 12, 17], 9), 8)
assert.deepEqual(nearestValue([4, 9, 10, 11, 12, 17], 9), 9)
assert.deepEqual(nearestValue([4, 7, 10, 11, 12, 17], 0), 4)
assert.deepEqual(nearestValue([4, 7, 10, 11, 12, 17], 100), 17)
assert.deepEqual(nearestValue([5, 10, 8, 12, 89, 100], 7), 8)
assert.deepEqual(nearestValue([-1, 2, 3], 0), -1)
assert.deepEqual(nearestValue([0, -2], -1), -2)