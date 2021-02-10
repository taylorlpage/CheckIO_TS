import * as assert from "assert"

function isAcceptablePassword(password: string): boolean {
    return password.length > 6
}

assert.deepEqual(isAcceptablePassword("short"), false)
assert.deepEqual(isAcceptablePassword("muchlonger"), true)
assert.deepEqual(isAcceptablePassword("ashort"), false)