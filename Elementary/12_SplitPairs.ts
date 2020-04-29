import * as assert from "assert"

function splitPairs(text: string): string[] {
    return text.match(/(..?)/g)?.map(val => val.length === 2 && val || val.concat("_")) || []
}

const splitPairs2 = (text: string): string[] => text.match(/(..?)/g)?.map(val => val.length === 2 && val || val.concat("_")) || []

assert.deepEqual(splitPairs('abcd'), ['ab', 'cd'])
assert.deepEqual(splitPairs('abc'), ['ab', 'c_'])
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_'])
assert.deepEqual(splitPairs('a'), ['a_'])
assert.deepEqual(splitPairs(''), [])