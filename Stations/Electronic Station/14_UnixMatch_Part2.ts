import * as assert from "assert"

function unixMatch(filename: string, pattern: string): boolean {
    // Replace "pattern" info with RegEx equivalents
    const re: RegExp = new RegExp(pattern.replace(/(\!)([^\]])/gi, "^$2")
                                    .replace("[!]", "\\[\!\\]")
                                    .replace(".", "\\.{1}")
                                    .replace(/\*/g, "(.*)")
                                    .replace(/\?/g, "."), "i")
    // Return test of filename "match" with RegEx
    // Note: "?." used to set null to undefined
    //    && "??" used to set undefined value
    return filename === (filename.match(re)?.[0] ?? "")
}

assert.deepStrictEqual(unixMatch("log1.txt", "log[1234567890].txt"), true)
assert.deepStrictEqual(unixMatch("log1.txt", "log[!1].txt"), false)
assert.deepStrictEqual(unixMatch("name.exe", "name.[!.][!.][!.]"), true)
assert.deepStrictEqual(unixMatch("[!]check.txt", "[!]check.txt"), true)
assert.deepStrictEqual(unixMatch("1name.txt", "[!abc]name.txt"), true)