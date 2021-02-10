import * as assert from "assert";

function isometricStrings(line1: string, line2: string): boolean {
    // Get and Set line1 and line2 mapped values to return number array
    // -- Note to use the index (i) in this case as a shortcut for maintaining placeholder
    // -- Also note that this does not check length due to precondition specification
    const MapValues = (str: string): number[] => Array.from(str.split("").reduce((acc, v, i) => acc.set(v, (acc.get(v) || 0) + i), new Map()).values())
    // If all values "line up" then the string is isometric
    return [MapValues(line1), MapValues(line2)].every((_,i,arr) => arr[0][i] === arr[1][i])
}

assert.deepStrictEqual(isometricStrings("add", "egg"), true)
assert.deepStrictEqual(isometricStrings("foo", "bar"), false)
assert.deepStrictEqual(isometricStrings("", ""), true)
assert.deepStrictEqual(isometricStrings("all", "all"), true)
assert.deepStrictEqual(isometricStrings("gogopy", "doodle"), false)
assert.deepStrictEqual(isometricStrings("paper", "title"), true)