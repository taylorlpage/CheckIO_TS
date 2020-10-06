import * as assert from "assert";

function translate(text: string): string {
    // RegExp to split text on |, consonant + 1, vowel + 2
    // Flags are (g)lobal, case (i)nsensitive, and stick(y) to hold index
    // *Could be inline within the split but this is easier to read
    const re = new RegExp("([\|])|([^aeiouy].{1})|([aeiouy].{2})", "giy")
    return  text.replace(/\s/g, "|")    // replace all spaces with bar placeholder (easier for regex)
                .split(re)              // use RegEx to split on format
                .filter(v => v)         // filter any undefined or empty cells
                .map(v => v[0] === "|" ? " " : v[0]) // replace bar placeholder back to spaces
                .join("")               // simple join back to string
}

assert.deepEqual(translate("hieeelalaooo"), "hello")
assert.deepEqual(translate("hoooowe yyyooouuu duoooiiine"), "how you doin")
assert.deepEqual(translate("aaa bo cy da eee fe"), "a b c d e f")
assert.deepEqual(translate("sooooso aaaaaaaaa"), "sos aaa")