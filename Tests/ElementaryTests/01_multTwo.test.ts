import * as assert from "assert"
import multTwo from "../../Elementary/01_MultiplyIntro";

describe("Practice Examples", () => {
    it("3 * 2 = 6", () => {
        assert.equal(multTwo(3,2), 6, "Passed")
    });

    it("0 * 1 = 0", () => {
        assert.equal(multTwo(0,1), 0, "Passed")
    });
})