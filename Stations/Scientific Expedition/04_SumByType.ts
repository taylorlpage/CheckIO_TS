import * as assert from "assert";

function sumByTypes(values: Array<number|string>): [string, number] {
    return values.reduce( ([s, n], v) => 
                    typeof v === "string"   // check type
                    ? [(s + v), n]          // add v to strings s
                    : [ s, (n + v)],        // add v to numbers n
                    ["", 0]                 // default value array
                )
}

assert.deepEqual(sumByTypes([]), ["", 0])
assert.deepEqual(sumByTypes([1, 2, 3]), ["", 6])
assert.deepEqual(sumByTypes(["1", 2, 3]), ["1", 5])
assert.deepEqual(sumByTypes(["1", "2", 3]), ["12", 3])
assert.deepEqual(sumByTypes(["1", "2", "3"]), ["123", 0])
assert.deepEqual(sumByTypes(["size", 12, "in", 45, 0]), ["sizein", 57])