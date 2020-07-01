import * as assert from "assert";

function frequencySort(items: any[]): any[] {
    return Array.from(items
                .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()))
                .sort((a,b) => b[1] - a[1])
                .map(v => Array(v[1]).fill(v[0]))
                .flat()
}

assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2])
assert.deepEqual(frequencySort(["bob", "bob", "carl", "alex", "bob"]), ["bob", "bob", "bob", "carl", "alex"])
assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42])
assert.deepEqual(frequencySort([]), [])
assert.deepEqual(frequencySort([1]), [1])