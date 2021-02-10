import assert from "assert"

function toCamelCase(name: string): string {
    // 1: Replace Regex to get groupings
    // 2: Remove "_" from grouping and uppercase
    return name.replace(/([a-z]_)([a-z])/g, "$1$2".toUpperCase()) //v => v.replace(/[_]/,"").toUpperCase())
}

console.log(toCamelCase("my_function_name"))

/*
assert.deepStrictEqual(toCamelCase("my_function_name"), "MyFunctionName")
assert.deepStrictEqual(toCamelCase("i_phone"), "IPhone")
*/
//(?:^\w|[A-Z]|[_]\w)