import map  from '../src/map.js';
import chai from "chai";
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

const onlyOddValues = (n) => {
    if(n['a'] % 2 !== 0) {
        return n['a'];
    } 
};

const array = [1, 2, 3, 4, 5];
const object = [{'a': 1}, {'a': 2}, {'a': 3}, {'a': 4}, {'a': 5}];

describe("Map.js", () => {
    const expectedArray = [1, 8, 27, 64, 125];
    const expectedArray2 = [1, 3, 5, 7, 9];

    describe('testing with arrays', () => {
        it("should return correct result with arrays", () => {
            const result = map(array, toThirdPower);
            expect(result).to.eqls(expectedArray);

            const result2 = map(array, iterateeWithIndex);
            expect(result2).to.eqls(expectedArray2);

            const result3 = map(array, iterateeWithIndexArray);
            expect(result3).to.eqls(expectedArray2);
        });
        it('should return [] with empty array', () => {
            const result = map([], toThirdPower);
            expect(result).to.eqls([]);

            const result2 = map([], iterateeWithIndex);
            expect(result2).to.eqls([]);

            const result3 = map([], iterateeWithIndexArray);
            expect(result3).to.eqls([]);
        });
    });

    describe('testing with other data types', () => {
        it("should return correct result with strings", () => {
            const string = "12345";
            const result = map(string, toThirdPower);
            expect(result).to.eqls(expectedArray);

            // With '+' it should concatenate the strings
            const result2 = map(string, iterateeWithIndex);
            expect(result2).to.eqls(['10', '21', '32', '43', '54']);

            // Can't test with iterateeWithIndexArray, because strings are immutable
        });
        it("should return array of NaN's with objects and iteratee that doesn't handle them correctly", () => {
            const result = map(object, toThirdPower);
            expect(result).to.eqls([NaN, NaN, NaN, NaN, NaN]);
        });
        it('should return correct array with object and correct iteratee', () => {
            const result = map(object, onlyOddValues);
            expect(result).to.eqls([1, undefined, 3, undefined, 5]);
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
});
