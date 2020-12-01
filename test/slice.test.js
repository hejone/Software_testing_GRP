import slice from '../src/slice.js';
import chai from "chai";
const expect = chai.expect;


describe('slice.js', () => {
    it('should use 0 and array.length by default  ', () => {
        const arr = [2, 3, 4, 5, 6, 7];
        const result = slice(arr);
        expect(result).to.eql(arr);
    });
    it('should work with positive positions', () => {
        const arr = [2, 3, 4, 5, 6, 7];
        const result = slice(arr, 1, 6);
        expect(result).to.eql([3, 4, 5, 6, 7]);
    });
    it('should work with negative positions', () => {
        const arr = [2, 3, 4, 5, 6, 7];
        const result = slice(arr, -6, -3);
        expect(result).to.eql([2, 3, 4]);
    });
    it('should work with negative start positive end', () => {
        const arr = [2, 3, 4, 5, 6, 7];
        const result = slice(arr, -3, 6);
        expect(result).to.eql([5, 6, 7]);
    });
    it('should work with positive start negative end', () => {
        const arr = [2, 3, 4, 5, 6, 7];
        const result = slice(arr, 3, -1);
        expect(result).to.eql([5, 6]);
    });
    it('should return an empty array if start > end', () => {
        const arr = [2, 3, 4, 5, 6, 7];
        const result = slice(arr, 5, 4);
        expect(result).to.eql([]);
    });
});
