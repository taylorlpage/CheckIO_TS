import * as assert from "assert"

function fromCamelCase(name: string): string {
    return `${name[0].toLowerCase()}${name.slice(1)}`   // Convert 1st to lower and create new string
            .replace(/([a-z])([A-Z])/g, "$1_$2")        // Regex to replace new string
            .toLowerCase()                              // Lowercase all values
}

assert.deepStrictEqual(fromCamelCase("MyFunctionName"), "my_function_name")
assert.deepStrictEqual(fromCamelCase("IPhone"), "i_phone")