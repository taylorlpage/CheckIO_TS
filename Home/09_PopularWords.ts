import * as assert from "assert";

function popularWords(text: string, words: string[]) {
    return words.reduce((k,v) => (k[v] = text.match(RegExp(`(\\b${v}\\b)`, "gi"))?.length || 0, k), {})
}

assert.deepEqual(popularWords("When I was One \n\
I had just begun\n\
When I was Two\n\
I was nearly new", ["i", "was", "three", "near"]), {
    "i": 4,
    "was": 3,
    "three": 0,
    "near": 0
})