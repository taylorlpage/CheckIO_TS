import * as assert from "assert"

function threeWords(text: string): boolean {
    return Boolean(text.match(/(([a-z]+)(\s|\b)){3}/gi))
}

const threeWords2 = (text: string): boolean => Boolean(text.match(/(([a-z]+)(\s|\b)){3}/gi))

assert.deepEqual(threeWords("Hello World hello"), true)
assert.deepEqual(threeWords("He is 123 man"), false)
assert.deepEqual(threeWords("1 2 3 4"), false)
assert.deepEqual(threeWords("bla bla bla bla"), true)
assert.deepEqual(threeWords("Hi"), false)