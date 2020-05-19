import * as assert from "assert"

function countDigits(text: string): number {
    return text.match(/\d/g)?.length || 0
}

const countDigits2 = (text: string): number => text.match(/\d/g)?.length || 0

assert.deepEqual(countDigits("hi"), 0)
assert.deepEqual(countDigits("who is 1st here"), 1)
assert.deepEqual(countDigits("my numbers is 2"), 1)
assert.deepEqual(countDigits("This picture is an oil on canvas "
 + "painting by Danish artist Anna "
 + "Petersen between 1845 and 1910 year"), 8)
assert.deepEqual(countDigits("5 plus 6 is"), 2)
assert.deepEqual(countDigits(""), 0)