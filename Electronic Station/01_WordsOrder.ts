import * as assert from "assert";

function wordsOrder(text: string, words: string[]): boolean {
    return words.every((w,i) => 
            i === words.indexOf(w) // Check for no duplicates in "words"
            && // if false returns false else will process 2nd half of && statment
            w === text.split(/\s/g).filter(v => words.includes(v))[i]) // Compare order of filtered text
}


assert.deepEqual(wordsOrder("hi world im here", ["world", "here"]), true)
assert.deepEqual(wordsOrder("hi world im here", ["here", "world"]), false)
assert.deepEqual(wordsOrder("hi world im here", ["world"]), true)
assert.deepEqual(wordsOrder("hi world im here", ["world", "here", "hi"]), false)
assert.deepEqual(wordsOrder("hi world im here", ["world", "im", "here"]), true)
assert.deepEqual(wordsOrder("hi world im here", ["world", "hi", "here"]), false)
assert.deepEqual(wordsOrder("hi world im here", ["world", "world"]), false)
assert.deepEqual(wordsOrder("hi world im here", ["country", "world"]), false)
assert.deepEqual(wordsOrder("hi world im here", ["wo", "rld"]), false)
assert.deepEqual(wordsOrder("", ["world", "here"]), false)
assert.deepEqual(wordsOrder("hi world world im here", ["world", "world"]), false)