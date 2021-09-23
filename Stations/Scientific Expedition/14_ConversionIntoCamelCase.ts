import * as assert from "assert"

function toCamelCase(name: string): any {
    // 1: Replace Regex to get groupings
    // 2: Remove "_" from grouping and uppercasereturn `${name[0].toUpperCase()}${name.slice(1).replace(/\w[_]\w/ig,(w) => w[1].toUpperCase())}`
    //return name.replace(/([a-z]+)|([\P{Pc}][a-z]+)/gimu, w => `${w[0].toUpperCase()}${w.slice(1)}`).replace(/_/gmi,"")
    return name.split("_").map(w => `${w[0].toUpperCase()}${w.slice(1)}`).join("")
    //return name.replace(/(?<word>[a-z]+)/gi, w => w) //(w => w[0].toUpperCase()+w.slice(1)).join("")
    return `${name[0].toUpperCase()}${name.slice(1)}`
            .replace(/([\P{Pc}]+)([a-z]+)/gimu, w => `${w[0].toUpperCase()}${w.slice(1)}`)
    return name.replace(/(?<word>\w+)(?<under>[\P{Pc}]?)/gimu, "$<word>")
    return name.match(/([a-z]+)|(^[\p{Pc}][a-z]+)/gimu)
    return name.replace(/(!([a-z]+)(?=[\P{Pc}])|(?<=[\P{Pc}])([a-z]+))/gimu, "")
    return name.match(/([\P{Pc}]+)/gimu)

    //return name.replace(/(_)([a-z])/gmi, "$2".toUpperCase()) //"$1$2".toUpperCase()) //v => v.replace(/[_]/,"").toUpperCase())
}

console.log(toCamelCase("my_function_name"))
console.log(toCamelCase("i_phone"))

assert.deepStrictEqual(toCamelCase("my_function_name"), "MyFunctionName")
assert.deepStrictEqual(toCamelCase("i_phone"), "IPhone")

//(?:^\w|[A-Z]|[_]\w)

//(([\P{Pc}]?)([a-z]+))+