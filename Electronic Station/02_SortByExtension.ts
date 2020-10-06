import * as assert from "assert";

function sortByExt(files: string[]): string[] {
    // RegExp to test for ".config" or "config."
    const re: RegExp = new RegExp(/(\.?(config)\.?)/gi)
    // Can be handled inline but this is easier to read
    // name: Substring to last index of "."
    // ext: simply grabs the last string value given as extension value
    //      - possible null so "||" will set to empty string ""
    const CreateNameExtObj = (v: string): { name: string, ext: string } => {
        if (re.test(v)) return {name: v, ext: ""}
        return { 
            name: v.substring(0, v.lastIndexOf(".")),
            ext: v.split(".")?.pop() || ""
        }
    }

    return files.sort((a,b) => {
        // Create objects to sort more simply
        const A: { name: string, ext: string } = CreateNameExtObj(a)
        const B: { name: string, ext: string } = CreateNameExtObj(b)
        // First check for ".config" or "config."
        // Keep files with empty names at top of list
        // Then sort by extensions
        // Then move extensions sort based on name
        return A.name.localeCompare("")
            ? ((A.ext < B.ext) ? -1 : (A.ext > B.ext) ? 1 : 0)
            : ((A.name < B.name) ? -1 : (A.name > B.name) ? 1 : 0) 
    })
}


assert.deepEqual(sortByExt(["1.cad", "1.bat", "1.aa"]), ["1.aa", "1.bat", "1.cad"])
assert.deepEqual(sortByExt(["1.cad", "1.bat", "1.aa", "2.bat"]), ["1.aa", "1.bat", "2.bat", "1.cad"])
assert.deepEqual(sortByExt(["1.cad", "1.bat", "1.aa", ".bat"]), [".bat", "1.aa", "1.bat", "1.cad"])
assert.deepEqual(sortByExt(["1.cad", "1.bat", ".aa", ".bat"]), [".aa", ".bat", "1.bat", "1.cad"])
assert.deepEqual(sortByExt(["1.cad", "1.", "1.aa"]), ["1.", "1.aa", "1.cad"])
assert.deepEqual(sortByExt(["1.cad", "1.bat", "1.aa", "1.aa.doc"]), ["1.aa", "1.bat", "1.cad", "1.aa.doc"])
assert.deepEqual(sortByExt(["1.cad", "1.bat", "1.aa", ".aa.doc"]), ["1.aa", "1.bat", "1.cad", ".aa.doc"])
assert.deepEqual(sortByExt([".config","my.doc","1.exe","345.bin","green.bat","format.c","no.name.","best.test.exe"]), 
    [".config","no.name.","green.bat","345.bin","format.c","my.doc","1.exe","best.test.exe"])
