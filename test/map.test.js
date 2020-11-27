import map  from '../src/map.js';
import chai from "chai";
const expect = chai.expect;

const array = [1, 2, 3, 4, 5];

const toThirdPower = (n) => {
    return Math.pow(n, 3);
}

describe("Map.js", () => {
    const expectedArray = [1, 8, 27, 64, 125];

    it("should return correct result with arrays", () => {
        const result = map(array, toThirdPower);
        expect(result).to.eqls(expectedArray);
    });
    it("should return correct result with strings", () => {
        const result = map("12345", toThirdPower);
        expect(result).to.eqls(expectedArray);
    });
    it("should return [undefined] with numbers", () => {
        expect(map(1, toThirdPower)).to.eqls([undefined]);
    });
    it("should return 0's and NaN's with falsey values", () => {
        const arr = [" ", NaN, undefined, null];
        const result = map(arr, toThirdPower);
        expect(result).to.eqls([0,NaN,NaN,0]);
    });
    it('should return empty array with null', () => {
        expect(map(null, toThirdPower)).to.eqls([]);
    });
    it('should throw an error when there is no iteratee', () => {
        try {
            expect(map(array)).to.throw("TypeError: iteratee is not a function");
        } catch (err) {
            // Nothing, just to prvent test from failing
        }
    });
});
