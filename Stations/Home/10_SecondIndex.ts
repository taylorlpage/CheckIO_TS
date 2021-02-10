import * as assert from "assert";

function secondIndex(text: string, symbol: string): number | undefined {
    return (Math.abs(~[...text].indexOf(symbol, text.indexOf(symbol) + 1)) || 1) - 1 || undefined
}

function secondIndex2(text: string, symbol: string): number | undefined {
    const index: number = text.indexOf(symbol, text.indexOf(symbol) + 1)
    return !~index ? undefined : index
}

function secondIndex3(text: string, symbol: string): number | undefined {
    return [...text].map(
        (v, i = text.indexOf(symbol)) => (v === symbol && i > -1) ? text.indexOf(symbol, i) : undefined
    )
    .filter(Number).slice(1).pop()
}

const secondIndex4 = (t: string, s: string): number | undefined => !~(t.indexOf(s, t.indexOf(s) + 1)) ? undefined : t.indexOf(s, t.indexOf(s) + 1)

assert.deepEqual(secondIndex("sims", "s"), 3)
assert.deepEqual(secondIndex("find the river", "e"), 12)
assert.deepEqual(secondIndex("hi", " "), undefined)
assert.deepEqual(secondIndex("hi mayor", " "), undefined)
assert.deepEqual(secondIndex("hi mr Mayor", " "), 5)