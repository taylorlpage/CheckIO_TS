import * as assert from "assert"

function isAllUpper(text: string): boolean {
    return text.split("").every(val => val.match(/[A-Z|\s|\d]/g))
}

const isAllUpper2 = (text: string): boolean => text.split("").every(val => val.match(/[A-Z|\s|\d]/g))

assert.equal(isAllUpper("ALL UPPER"), true)
assert.equal(isAllUpper("all lower"), false)
assert.equal(isAllUpper("mixed UPPER and lower"), false)
assert.equal(isAllUpper("Hi"), false)
assert.equal(isAllUpper("123"), true)
assert.equal(isAllUpper(""), true)