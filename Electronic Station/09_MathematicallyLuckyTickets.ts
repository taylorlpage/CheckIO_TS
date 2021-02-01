import * as assert from "assert"

/*
    1. The digits of the number can be split into groups of numbers.
    2. You cannot change the order of groups or digits.
    3. Each group is treated as a one integer number. (1 and 2 would become 12, etc.)
    4. Operational signs (+, -, * and /) are placed between the groups.
    5. Parenthesis are placed around subexpressions to eliminate any ambiguity
    in the evaluation order.
*/

function luckyTickets(value: string): boolean {
    return false
}

/*
assert.deepStrictEqual(luckyTickets("000000"), true)
assert.deepStrictEqual(luckyTickets("707409"), true)
assert.deepStrictEqual(luckyTickets("595347"), false)
assert.deepStrictEqual(luckyTickets("271353"), false)
assert.deepStrictEqual(luckyTickets("000955"), false)
assert.deepStrictEqual(luckyTickets("100478"), true)
assert.deepStrictEqual(luckyTickets("100479"), false)
assert.deepStrictEqual(luckyTickets("725126"), true)
assert.deepStrictEqual(luckyTickets("836403"), false)
assert.deepStrictEqual(luckyTickets("240668"), false)
assert.deepStrictEqual(luckyTickets("082140"), true)
assert.deepStrictEqual(luckyTickets("574699"), false)
assert.deepStrictEqual(luckyTickets("324347"), false)
assert.deepStrictEqual(luckyTickets("064377"), true)
assert.deepStrictEqual(luckyTickets("111111"), false)
assert.deepStrictEqual(luckyTickets("555555"), false)
assert.deepStrictEqual(luckyTickets("777777"), false)
assert.deepStrictEqual(luckyTickets("392039"), false)
*/