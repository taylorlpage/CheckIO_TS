import * as assert from "assert"

function betweenMarkers1(text: string, begin: string, end: string): string {
    const escapeAll = (value: string): string => value.split("").map(val => ["/", "b"].includes(val) ? val : `\\${val}`).join("")
    //escapeAll(begin)
    //console.log(begin)
    //begin.includes("[") && (begin = begin.replace(/\[/g, "\\[").replace(/\]/g, "\\]"))
    //end.includes("[") && (end = end.replace(/\[/g, "\\[").replace(/\]/g, "\\]"))

    const re: RegExp = new RegExp(`(?<=(${escapeAll(begin)})?)(\\w+)(?=(${escapeAll(end)}?))`, "g")
    console.log(re)
    console.log(text.match(re.compile()))
    /*console.log(text.slice(
        text.includes(begin) ? text.indexOf(begin) + begin.length : 0,
        text.includes(end) ? text.lastIndexOf(end) : text.length
    ))*/
    //console.log(new RegExp(`(?<=${begin}?)(.*)(?=${end}+?)`,"g")) //.test(text))
    //return new RegExp(`\\${begin}?(.*)\\${end}+`,"g").exec(text)[1]
    return ""
}

function betweenMarkers(text:string, begin: string, end: string): string {
    return text.slice(
        // Checks for and sets start index from "begin"
        text.includes(begin) ? text.indexOf(begin) + begin.length : 0,
        // Checks for and sets final index from "end"
        text.includes(end) ? text.lastIndexOf(end) : text.length
    )
}

console.log(betweenMarkers("No [b]hi", "[b]", "[/b]"))

/*
assert.deepEqual(betweenMarkers("What is >apple<", ">", "<"), "apple")
assert.deepEqual(betweenMarkers("<head><title>My new site</title></head>",
                            "<title>", "</title>"), "My new site")
assert.deepEqual(betweenMarkers("No[/b] hi", "[b]", "[/b]"), "No")
assert.deepEqual(betweenMarkers("No [b]hi", "[b]", "[/b]"), "hi")
assert.deepEqual(betweenMarkers("No hi", "[b]", "[/b]"), "No hi")
assert.deepEqual(betweenMarkers("No <hi>", ">", "<"), "")
*/