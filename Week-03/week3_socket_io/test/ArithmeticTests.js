const assert = require('assert');
const Arithmetic = require('../Arithmetic');

describe('Validating Arithmetic functions', () => {
    it('should return 9 when the value is 3', () => {
        assert.strictEqual(Arithmetic.square(3), 9);
    });

    it("should return 4 when the value is 2", () => {
        assert.strictEqual(Arithmetic.square(2), 4);
    });

    it("should return 50 when the value is 10 and 20", () => {
        assert.strictEqual(Arithmetic.percentage(10, 20), 50);
    });
})