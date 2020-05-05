import * as assert from "assert"

function threeWords(text: string): boolean {
    return Boolean(text.match(/(([a-z]+)(\s|\b)){3}/gi))
}

const threeWords2 = (text: string): boolean => Boolean(text.match(/(([a-z]+)(\s|\b)){3}/gi))

assert.equal(threeWords("Hello World hello"), true)
assert.equal(threeWords("He is 123 man"), false)
assert.equal(threeWords("1 2 3 4"), false)
assert.equal(threeWords("bla bla bla bla"), true)
assert.equal(threeWords("Hi"), false)