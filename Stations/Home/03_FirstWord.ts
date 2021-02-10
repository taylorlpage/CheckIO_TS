import * as assert from "assert"

function firstWord(text: string): string {
    return text.match(/[a-z']+/gi).shift()
}

const firstWord2 = (text: string): string => text.match(/[a-z']+/gi).shift()

assert.deepEqual(firstWord("Hello world"), "Hello")
assert.deepEqual(firstWord(" a word "), "a")
assert.deepEqual(firstWord("don't touch it"), "don't")
assert.deepEqual(firstWord("greetings, friends"), "greetings")
assert.deepEqual(firstWord("... and so on ..."), "and")
assert.deepEqual(firstWord("hi"), "hi")