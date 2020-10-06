import * as assert from "assert";

function capsLock(text: string): string {
    return text.split("a").map((v,i) => i % 2 ? v.toUpperCase() : v).join("")
}

assert.deepEqual(capsLock("Why are you asking me that?"), "Why RE YOU sking me thT?")
assert.deepEqual(capsLock("Always wanted to visit Zambia."), "AlwYS Wnted to visit ZMBI.")