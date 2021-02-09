import * as assert from "assert"

const V: string = "aeiouy"
const C: string = "bcdfghjklmnpqrstvwxz\\s"

function stripedWords(line: string): number {
    const regEx: RegExp = 
        new RegExp(`\\b[${C}]?(([${V}]{1}[${C}]{1})+|\\b([${C}]{1}[${V}]{1})+)\\b`, "gi");
    console.log(line.match(regEx))
    console.log(regEx)
    return line.match(regEx)?.length || 0
}

console.log(stripedWords("Dog,cat,mouse,bird.Human."))

/*
-- Basics --
assert.deepStrictEqual(stripedWords("My name is ..."), 3)
assert.deepStrictEqual(stripedWords("Hello world"), 0)
assert.deepStrictEqual(stripedWords("A quantity of striped words."), 1)
assert.deepStrictEqual(stripedWords("Dog,cat,mouse,bird.Human."), 3)

-- Extra --
assert.deepStrictEqual(stripedWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit."), 5)
assert.deepStrictEqual(stripedWords("To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?"), 8)
assert.deepStrictEqual(stripedWords("The European languages are members of the same family. Their separate existence is a myth."), 6)
assert.deepStrictEqual(stripedWords("For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."), 6)
assert.deepStrictEqual(stripedWords("Aaaa."), 0)

-- Extra2 --
assert.deepStrictEqual(stripedWords("1 2 3 12 13"), 0)
assert.deepStrictEqual(stripedWords("1st 2a ab3er root rate"), 1)
assert.deepStrictEqual(stripedWords("JJJ:qwerty,iddqd,hoho"), 1)
assert.deepStrictEqual(stripedWords("I can see dead people. yes,no."), 2)
*/