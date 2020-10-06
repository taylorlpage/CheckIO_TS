import * as assert from "assert";

function checkPangram(text: string): boolean {
    return new Set(text.toLowerCase().replace(/\W|_/gi, "")).size === 26
}

assert.deepEqual(checkPangram("The quick brown fox jumps over the lazy dog."), true);
assert.deepEqual(checkPangram("ABCDEF"), false)
assert.deepEqual(checkPangram("abcdefghijklmnopqrstuvwxyz"), true)
assert.deepEqual(checkPangram("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), true)
assert.deepEqual(checkPangram("abcdefghijklmnopqrstuvwxy"), false)
assert.deepEqual(checkPangram(("Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!")), true)
assert.deepEqual(checkPangram(("As quirky joke, chefs won't pay devil magic zebra tax.")), true)
assert.deepEqual(checkPangram(("Six big devils from Japan quickly forgot how to walt.")), false)