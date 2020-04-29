import * as assert from "assert"

function firstWord(text: string): string {
    return text.trim().split(/\s/g).shift()
}

assert.equal(firstWord("Hello world"), "Hello")
assert.equal(firstWord("a word"), "a")
assert.equal(firstWord("hi"), "hi")