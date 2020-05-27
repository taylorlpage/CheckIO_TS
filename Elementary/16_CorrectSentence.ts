import * as assert from "assert"

function correctSentence(text: string): string {
    return text[0].toUpperCase().concat(text.slice(1), text.endsWith(".") ? "" : ".")
}

const correctSentence2 = (text: string): string => text[0].toUpperCase().concat(text.slice(1),text.endsWith(".") ? "" : ".")

assert.deepEqual(correctSentence("greetings, friends"), "Greetings, friends.")
assert.deepEqual(correctSentence("Greetings, friends"), "Greetings, friends.")
assert.deepEqual(correctSentence("Greetings, friends."), "Greetings, friends.")