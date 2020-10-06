import * as assert from "assert";

function goesAfter(word: string, first: string, second: string): boolean {
    return word.slice(word.indexOf(first), word.indexOf(second) + 1) === `${first}${second}`
}

assert.deepEqual(goesAfter("world", "w", "o"), true)
assert.deepEqual(goesAfter("world", "w", "r"), false)
assert.deepEqual(goesAfter("world", "l", "o"), false)
assert.deepEqual(goesAfter("panorama", "a", "n"), true)
assert.deepEqual(goesAfter("list", "l", "o"), false)
assert.deepEqual(goesAfter("", "l", "o"), false)
assert.deepEqual(goesAfter("list", "l", "l"), false)
assert.deepEqual(goesAfter("world", "d", "w"), false)
assert.deepEqual(goesAfter("almaz", "r", "a"), false)
assert.deepEqual(goesAfter("almaz", "m", "a"), false)
assert.deepEqual(goesAfter("llama", "l", "a"), false)