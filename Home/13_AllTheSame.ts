import * as assert from "assert";

function allTheSame(elements: any[]): boolean {
    return elements.every(v => v === elements[0])
}

assert.deepEqual(allTheSame([1, 1, 1]), true)
assert.deepEqual(allTheSame([1, 2, 1]), false)
assert.deepEqual(allTheSame(["a", "a", "a"]), true)
assert.deepEqual(allTheSame([]), true)
assert.deepEqual(allTheSame([1]), true)