import * as assert from "assert";

function commonWords(line1: string, line2: string): string {
    return line1.split(",").filter(w => RegExp(`\\b${w}\\b`, "g").test(line2)).sort().join(",")
}

assert.deepEqual(commonWords("hello,world", "hello,earth"), "hello")
assert.deepEqual(commonWords("one,two,three", "four,five,six"), "")
assert.deepEqual(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two")
assert.deepEqual(commonWords("mega,cloud,two,website,final",
    "window,penguin,literature,network,fun,cloud,final,sausage"), "cloud,final")