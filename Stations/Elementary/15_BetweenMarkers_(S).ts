import * as assert from "assert"

function betweenMarkers(line: string, left: string, right: string): string {
    return new RegExp(`\\${left}(.*)\\${right}+`,"g").exec(line)[1]
}

//const betweenMarkers2 = (line: string, left: string, right, string): string => new RegExp("\\"+left+"(.*)\\"+right+"+","g").exec(line)[1]

assert.deepEqual(betweenMarkers("What is >apple<", ">", "<"), "apple")
assert.deepEqual(betweenMarkers("What is [apple]", "[", "]"), "apple")
assert.deepEqual(betweenMarkers("What is ><", ">", "<"), "")
assert.deepEqual(betweenMarkers("[an apple]", "[", "]"), "an apple")