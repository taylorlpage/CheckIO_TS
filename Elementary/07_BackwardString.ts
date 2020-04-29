import * as assert from "assert"

function backwardString(value: string): string {
    return value.split("").reverse().join("")
}

const backwardString2 = (value: string): string => value.split("").reverse().join("")

assert.deepEqual(backwardString("val"), "lav")
assert.deepEqual(backwardString(""), "")
assert.deepEqual(backwardString("ohho"), "ohho")
assert.deepEqual(backwardString("123456789"), "987654321")

assert.deepEqual(backwardString2("val"), "lav")
assert.deepEqual(backwardString2(""), "")
assert.deepEqual(backwardString2("ohho"), "ohho")
assert.deepEqual(backwardString2("123456789"), "987654321")