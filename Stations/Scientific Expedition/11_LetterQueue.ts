import * as assert from "assert";

function letterQueue(commands: string[]): string {
    return commands.reduce((acc,v) => { 
            (v.split(" ")[0] === "PUSH") ? acc.push(v.split(" ")[1]) : acc.shift()
            return acc
        }, []).join("")
}

assert.deepEqual(letterQueue(["PUSH A",
 "POP",
 "POP",
 "PUSH Z",
 "PUSH D",
 "PUSH O",
 "POP",
 "PUSH T"]), "DOT")
assert.deepEqual(letterQueue(["POP", "POP"]), "")
assert.deepEqual(letterQueue(["PUSH H", "PUSH I"]), "HI")
assert.deepEqual(letterQueue([]), "")