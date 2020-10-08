import * as assert from "assert";
import { string } from "tassert";

function mostWanted(text: string): string {
     return Array.from(
         // Spread to Array and Remove spaces and puncuations
         [...text.toLowerCase().replace(/[^a-z]+/gi,"")]
         // Reduce array using a Map to set key/value sets
         .reduce((acc, v) => acc.set(v, (acc.get(v) || 0) + 1), new Map()))
         // Sort based on count value then on latinAlpha value
         .sort((a,b) => a[1] < b[1]
            ? 1 : (a[1] > b[1] || a[0] < b[0])
            ? -1 : 0)
         // Remove first cell and read first index or default empty string
         .shift()?.[0] || ""
}

assert.deepEqual(mostWanted("Hello World!"), "l")
assert.deepEqual(mostWanted("How do you do?"), "o")
assert.deepEqual(mostWanted("One"), "e")
assert.deepEqual(mostWanted("Oops!"), "o")
assert.deepEqual(mostWanted("AAaooo!!!!"), "a")
assert.deepEqual(mostWanted("abe"), "a")