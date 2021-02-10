import * as assert from "assert";

function isAllUpper(text: string): boolean {
    return (/^[A-Z]+$/g).test(text.replace(/\s|\d/g, ""))
}

assert.deepEqual(isAllUpper("ALL UPPER"), true)
assert.deepEqual(isAllUpper("all lower"), false)
assert.deepEqual(isAllUpper("mixed UPPER and lower"), false)
assert.deepEqual(isAllUpper("935 UPPER"), true)
assert.deepEqual(isAllUpper("DIGITS123"), true)
assert.deepEqual(isAllUpper("123"), false)
assert.deepEqual(isAllUpper("Hi"), false)
assert.deepEqual(isAllUpper("     "), false)
assert.deepEqual(isAllUpper(""), false)