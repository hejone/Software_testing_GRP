import reduce  from '../src/reduce.js';
import chai from "chai";
const expect = chai.expect;

const onlyAccumulator = (acc) => {
    return acc + 1;
};

const accumulatorAndValue = (acc, val) => {
    return acc + val;
};

const accumulatorValueAndIndex = (acc, val, idx) => {
    acc[idx] = val;
    return acc;
};

const accumulatorValueIndexCollection = (acc, val, idx, coll) => {
    acc[idx] = (coll[idx] === val);
    return acc;
}

const arr = [2, 3, -3, 6, 200, -2000, -20];
const obj = {a: 2, b: 3, c: -3, d: 6, ad: -14, dd: 200, g: -20};

describe('Reduce.js', () => {
    describe('Only accumulator iteratee function', () => {
        it('should return the number of elements in an array', () => {
            const result = reduce(arr, onlyAccumulator, 0);
            expect(result).to.eql(arr.length);
        });
        it('should return the number of elements in an object', () => {
            const result = reduce(obj, onlyAccumulator, 0);
            expect(result).to.eql(Object.keys(obj).length);
        });
    });
    describe('Accumulator and value iteratee function', () => {
        it('should return the sum of the elements in an array', () => {
            const result = reduce(arr, accumulatorAndValue, 0);
            expect(result).to.eql(arr.reduce((a, b) => a + b, 0));
        });
        it('should return the sum of the elements in an object', () => {
            const result = reduce(obj, accumulatorAndValue, 0);
            expect(result).to.eql(Object.values(obj).reduce((a, b) => a + b, 0));
        });
    });
    describe('Accumulator, value and index/key iteratee function', () => {
        it('should return a deeply equal array for an array', () => {
            const result = reduce(arr, accumulatorValueAndIndex, new Array(arr.length));
            expect(result).to.eql(arr);
        });
        it('should return a deeply equal object for an object', () => {
            const result = reduce(obj, accumulatorValueAndIndex, {});
            expect(result).to.eql(obj);
        });
    });
    describe('Accumulator, value, index/key and collection iteratee function', () => {
        it('should return an array with equal length and all values true for an array', () => {
            const result = reduce(arr, accumulatorValueIndexCollection, new Array(arr.length));
            const cmpArr = new Array(arr.length).fill(true);
            expect(result).to.eql(cmpArr);
        });
        it('should return an object with equal keys and all values true for an object', () => {
            const result = reduce(obj, accumulatorValueIndexCollection, {});
            const cmpArr = [];
            for(const key in obj) cmpArr.push([key, true]);
            expect(result).to.eql(Object.fromEntries(cmpArr));
        });
    });
    describe('No accumulator and empty collection', () => {
        it('should return undefined for an array', () => {
            const result = reduce([], accumulatorAndValue);
            expect(result).to.eql(undefined);
        });
        it('should return undefined for an object', () => {
            const result = reduce({}, accumulatorAndValue);
            expect(result).to.eql(undefined);
        });
    });
});
