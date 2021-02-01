import * as assert from "assert"

function cutSentence(line: string, length: number): string {
    return  length >= line.length // Check lineLength compared to cut length
            // if smaller then return whole line
            ? line
            // else return truncated and ellipsed string 
            : line.slice(0, length + 1).replace(/ *[^ ]*$/, "...")
}

assert.deepStrictEqual(cutSentence("Hi my name is Alex", 8), "Hi my...")
assert.deepStrictEqual(cutSentence("Hi my name is Alex", 4), "Hi...")
assert.deepStrictEqual(cutSentence("Hi my name is Alex", 20), "Hi my name is Alex")
assert.deepStrictEqual(cutSentence("Hi my name is Alex", 18), "Hi my name is Alex")
assert.deepStrictEqual(cutSentence("Hi my name is Alex", 1), "...")