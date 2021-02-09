import * as assert from "assert"

function multTwo(a: number, b: number): number {
    return Math.imul(a, b)
}

export default multTwo

assert.deepStrictEqual(multTwo(3, 2), 6)
assert.deepStrictEqual(multTwo(0, 1), 0)