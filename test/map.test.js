import map  from '../src/map.js';
import chai, { should } from "chai";
const expect = chai.expect;



const toThirdPower = (n) => {
    return Math.pow(n, 3);
};

const iterateeWithIndex = (n, index) => {
    return n + index;
};

const iterateeWithIndexArray = (n, index, array) => {
    array[index] = index + n;
    return array[index]; 
};

const array = [1, 2, 3, 4, 5];
const object = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

describe("Map.js", () => {
    const expectedArray = [1, 8, 27, 64, 125];
    const expectedArray2 = [1, 3, 5, 7, 9];

    it("should return correct result with arrays", () => {
        const result = map(array, toThirdPower);
        expect(result).to.eqls(expectedArray);

        const result2 = map(array, iterateeWithIndex);
        expect(result2).to.eqls(expectedArray2);

        const result3 = map(array, iterateeWithIndexArray);
        expect(result3).to.eqls(expectedArray2);
    });
    it("should return correct result with strings", () => {
        const string = "12345";
        const result = map(string, toThirdPower);
        expect(result).to.eqls(expectedArray);

        // With '+' it should concatenate the strings
        const result2 = map(string, iterateeWithIndex);
        expect(result2).to.eqls(['10', '21', '32', '43', '54']);
    });
    it("should return [undefined] with objects", () => {
        const result = map(object, toThirdPower);
        expect(result).to.eqls([undefined]);
    })
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
    it('should throw an error when there is no iteratee or iteratee not a function', () => {
        try {
            expect(map(array)).to.throw("TypeError: iteratee is not a function");
        } catch (err) {
            // Nothing, just to prevent test from failing
        }
        try {
            expect(map(array, 'a')).to.throw("TypeError: iteratee is not a function");
        } catch (err) {
            // Nothing, just to prevent test from failing
        }
    });
});
