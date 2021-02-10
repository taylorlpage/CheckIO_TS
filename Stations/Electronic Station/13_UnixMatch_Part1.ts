import * as assert from "assert"

function unixMatch(filename: string, pattern: string): boolean {
    // Replace "pattern" info with RegEx equivalents
    const re: RegExp = new RegExp(pattern.replace(".", "\\.{1}")
                                    .replace(/\*/g, "(.*)")
                                    .replace(/\?/g, "."), "i")
    // Return test of filename "match" with RegEx
    // Note: "?." used to set null to undefined
    //    && "??" used to set undefined value
    return filename === (filename.match(re)?.[0] ?? "")
}

assert.deepStrictEqual(unixMatch("somefile.txt", "*"), true)
assert.deepStrictEqual(unixMatch("other.exe", "*"), true)
assert.deepStrictEqual(unixMatch("my.exe", "*.txt"), false)
assert.deepStrictEqual(unixMatch("log1.txt", "log?.txt"), true)
assert.deepStrictEqual(unixMatch("log12.txt", "log?.txt"), false)
assert.deepStrictEqual(unixMatch("log12.txt", "log??.txt"), true)
assert.deepStrictEqual(unixMatch("12apache1", "*.*"), false)
assert.deepStrictEqual(unixMatch("12apache1.log", "*.*"), true)
assert.deepStrictEqual(unixMatch("name....", "name.*"), true)
assert.deepStrictEqual(unixMatch("file19.txt", "*z*"), false)