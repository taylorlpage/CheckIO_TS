import * as assert from "assert"

function backwardStringByWord(text: string): string {
    /* Both below returns do the same actions just in different orders
        1: Splits words, Maps to reverse letters in each word, Joins words
            - text.split(/\s/g).map(s => [...s].reverse().join("")).join(" ")
        2: Splits letters, Reverses, Joins letters, Splits words, Reverses each letter, Joins
            - [...text].reverse().join("").split(/\s/g).reverse().join(" ")
       Note: 2 is about twice as fast
    */
    return [...text].reverse().join("").split(/\s/g).reverse().join(" ")
}

const backwardStringByWord2 = (text: string): string => [...text].reverse().join("").split(" ").reverse().join(" ")

assert.deepEqual(backwardStringByWord(""), "")
assert.deepEqual(backwardStringByWord("world"), "dlrow")
assert.deepEqual(backwardStringByWord("hello world"), "olleh dlrow")
assert.deepEqual(backwardStringByWord("hello   world"), "olleh   dlrow")
assert.deepEqual(backwardStringByWord("welcome to a game"), "emoclew ot a emag")