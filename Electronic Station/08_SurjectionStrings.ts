import * as assert from "assert";
// INCOMPLETE
function isometricStrings(line1: string, line2: string): boolean {
    // Note: This can all be done inline but this is easier to read
    /* const T_SetSize: number = new Set([[...line1], [...line2]]
                                    .filter(v => v.length !== 0)
                                    .map(v => Array.from(new Set(v)))[0]
                                    ).size */
    const L1_Set = new Set(line1)
    const L2_Set = new Set(line2)
    const T_Length = new Set([[...line1], [...line2]]
                                .filter(v => v.length !== 0)
                                .map(w => Array.from(new Set(w)).flat())
                                .flat())
    const L1_SetSize: number = new Set(line1).size
    const L2_SetSize: number = new Set(line2).size
    //console.log(new Set((
    /*console.log([[line1], [line2]]
                    .filter(v => v.length !== 0)
                    .map(v => Array.from(new Set(...v)))
                    .flat().length
                    )
    console.log(new Set([line1, line2].filter(v => v.length !== 0)))
    //.map(v => [v])))*/
    //console.log(T_SetSize)
    console.log(T_Length)
    console.log(L1_Set.size)
    console.log(L2_Set.size)
    //return (T_Length === L1_Set.size && T_Length === L2_Set.size)
    return true
}

//assert.deepEqual(isometricStrings("add", "egg"), true)
//assert.deepEqual(isometricStrings("foo", "bar"), false)
//assert.deepEqual(isometricStrings("", ""), true)
//assert.deepEqual(isometricStrings("all", "all"), true)
//assert.deepEqual(isometricStrings("gogopy", "doodle"), false)
assert.deepEqual(isometricStrings("paper", "title"), true)

/*
return Array.from(items
            .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()))
            .sort((a, b) => b[1] - a[1])
            .map(v => Array(v[1]).fill(v[0]))
            .flat()
*/