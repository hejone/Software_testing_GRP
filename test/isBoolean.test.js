import isBoolean from '../src/isBoolean.js';
import chai from "chai";
const expect = chai.expect;

describe("isBoolean.js", () => {
    describe("Test true and false", () => {
        it("should return true for 'true'", () => {
            expect(isBoolean(true)).to.be.true;
        });

        it("should return true for 'false'", () => {
            expect(isBoolean(false)).to.be.true;
        });

        it("should return true for values that evaluate to 'true'", () => {
            expect(isBoolean(1 < 2)).to.be.true;
        });

        it("should return true for values that evaluate to 'false'", () => {
            expect(isBoolean(1 > 2)).to.be.true;
        });

        it("should return true for Boolean objects", () => {
            const bool = Boolean(true);
            expect(isBoolean(bool)).to.be.true;
        });
    });

    describe("Test other datatypes", () => {
        it("should return false for null, undefined and NaN", () => {
            expect(isBoolean(null)).to.be.false;
            expect(isBoolean(undefined)).to.be.false;
            expect(isBoolean(NaN)).to.be.false;
        })
        it('should return false for strings', () => {
            expect(isBoolean("string")).to.be.false;
            expect(isBoolean("true")).to.be.false;
            expect(isBoolean('1')).to.be.false;
        });

        it("should return false for numbers", () => {
            expect(isBoolean(2.1)).to.be.false;
            expect(isBoolean(0)).to.be.false;
        });

        it("should return false for objects and arrays", () => {
            expect(isBoolean([1,2])).to.be.false;
            expect(isBoolean({'a': true})).to.be.false;
        });
    });
});
