import * as assert from "assert";

function follow(instructions: string): [number, number] {
    // *Note - This can be done in-line but this is easier to read
    // Count distinct instructions for f, b, r, l
    const Count = (i: string): number => instructions.match(RegExp(`${i}`, "g"))?.length || 0
    // Create array of [(right - left), (forward - back)] totals
    return [(Count("r") - Count("l")), (Count("f") - Count("b"))]
}

assert.deepEqual(follow("fflff"), [-1, 4])
assert.deepEqual(follow("ffrff"), [1, 4])
assert.deepEqual(follow("fblr"), [0, 0])