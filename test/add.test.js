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
            expect(result).to.be.above(0);
        });
        it('should give negative number', () => {
            const result = add(-getPositiveNumber(), -getPositiveNumber());
            expect(result).to.be.below(0);
        });
        it('should give exact result', () => {
            const pNumber = getPositiveNumber();
            const nNumber = -getPositiveNumber();
            const nativeResult = pNumber + nNumber;
            const result = add(pNumber, nNumber);
            expect(result).to.equal(nativeResult);
        });
        it('should give exactly zero', () => {
            const number = getPositiveNumber();
            expect(add(number, -number)).to.equal(0);
            expect(add(Number.MAX_VALUE, Number.MIN_VALUE));
        });
    });
    describe('Edge value handling', () => {
        const posInf = Number.POSITIVE_INFINITY;
        const negInf = Number.NEGATIVE_INFINITY;
        it('should give positive infinity', () => {
            expect(add(posInf, getPositiveNumber())).to.equal(posInf);
            expect(add(posInf, -getPositiveNumber())).to.equal(posInf);
            expect(add(Number.MAX_VALUE, Number.MAX_VALUE)).to.equal(posInf);
        });
        it('should give negative infinity', () => {
            expect(add(negInf, getPositiveNumber())).to.equal(negInf);
            expect(add(negInf, -getPositiveNumber())).to.equal(negInf);
        });
        it('adding Inf and -Inf should give NaN', () => {
            expect(add(posInf, negInf)).to.be.NaN;
        });
    });
    describe('Testing with other datatypes than numbers', () => {
        const numberString = "2";
        const object = {'a': 1};
        const number = getPositiveNumber();
        it('string and number', () => {
            const result = add(numberString, number);
            expect(typeof result === "number").to.be.false;
        });
        it('object and number', () => {
            const result = add(object, number);
            expect(result).to.be.NaN;
        });
        it('string with string', () => {
            const result = add(numberString, numberString);
            expect(typeof result === "number").to.be.false;
        });
        it('object with object', () => {
            const result = add(object, object);
            expect(result).to.be.NaN;
        });
        it('string with object', () => {
            const result = add(numberString, object);
            expect(typeof result === "number").to.be.false;
        });
    });
});
