import * as assert from "assert"

function sumNumbers(test: string): number {
    return test.match(/\b\d+\b/g)?.map(Number)?.reduce((a, b) => a + b) || 0
}

const sumNumbers2 = (test: string): number => test.match(/\b\d+\b/g)?.map(Number)?.reduce((a, b) => a + b) || 0

assert.deepEqual(sumNumbers("hi"), 0)
assert.deepEqual(sumNumbers("who is 1st here"), 0)
assert.deepEqual(sumNumbers("my numbers is 2"), 2)
assert.deepEqual(sumNumbers("This picture is an oil on canvas "
 + "painting by Danish artist Anna "
 + "Petersen between 1845 and 1910 year"), 3755)
assert.deepEqual(sumNumbers("5 plus 6 is"), 11)
assert.deepEqual(sumNumbers(""), 0)