import * as assert from "assert";

function absoluteSorting(values: number[]): number[] {
    return values.sort((a,b) => Math.abs(a) - Math.abs(b))
}

assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20])
assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3])
assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3])