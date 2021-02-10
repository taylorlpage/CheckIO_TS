import * as assert from "assert";

function timeConverter(dayTime: string): string {
    return new Date(0, 0, 0, +dayTime.substr(0, 2), +dayTime.substr(3, 2))
                .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
                .toLowerCase().replace(/(.)m/g, "$1.m.")
}

assert.deepEqual(timeConverter("12:30"), "12:30 p.m.")
assert.deepEqual(timeConverter("09:00"), "9:00 a.m.")
assert.deepEqual(timeConverter("23:15"), "11:15 p.m.")