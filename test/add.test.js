import add  from '../src/add.js';
import chai from "chai"
const expect = chai.expect;

const getPositiveNumber = () => {
    return Math.random() * 1000;
};

describe('Add.js', () => {
    describe('Adding numbers (negative and positive)', () => {
        it('should give positive number', () => {
            const result = add(getPositiveNumber(), getPositiveNumber());
            expect(result).gt(0);
        });
        it('should give negative number', () => {
            const result = add(-getPositiveNumber(), -getPositiveNumber());
            expect(result).lt(0);
        });
        it('should give exact result', () => {
            const pNumber = getPositiveNumber();
            const nNumber = -getPositiveNumber();
            const nativeResult = pNumber + nNumber;
            const result = add(pNumber, nNumber);
            expect(result).equal(nativeResult);
        });
        it('should give exactly zero', () => {
            const number = getPositiveNumber();
            expect(add(number, -number)).equal(0);
        });
    });
});
