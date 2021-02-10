import * as assert from "assert"

function isAllUpper(text: string): boolean {
    return text.split("").every(val => val.match(/[A-Z|\s|\d]/g))
}

const isAllUpper2 = (text: string): boolean => text.split("").every(val => val.match(/[A-Z|\s|\d]/g))

assert.deepEqual(isAllUpper("ALL UPPER"), true)
assert.deepEqual(isAllUpper("all lower"), false)
assert.deepEqual(isAllUpper("mixed UPPER and lower"), false)
assert.deepEqual(isAllUpper("Hi"), false)
assert.deepEqual(isAllUpper("123"), true)
assert.deepEqual(isAllUpper(""), true)