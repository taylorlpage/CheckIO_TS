import * as assert from "assert"

function firstWord(text: string): string {
    return text.trim().split(/\s/g).shift()
}

assert.deepEqual(firstWord("Hello world"), "Hello")
assert.deepEqual(firstWord("a word"), "a")
assert.deepEqual(firstWord("hi"), "hi")