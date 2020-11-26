import divide  from '../src/divide.js';
import chai from "chai"
const expect = chai.expect;

const divisibleByThree = 9;
const three = 3;
const otherPrime = 7;
const delta = 0.00001;

describe('Divide.js', () => {
    describe('Basic arithmetic operation', () => {
        it('dividing same number should give exactly 1', () => {
            const result = divide(three, three);
            expect(Number.isInteger(result)).to.be.true;
            expect(result).to.equal(1);
        });
        it('should give positive integer', () => {
            const result = divide(divisibleByThree, three);
            const comparison = divisibleByThree / three;
            expect(Number.isInteger(result)).to.be.true;
            expect(result).to.equal(comparison);

            const result2 = divide(-divisibleByThree, -three);
            expect(Number.isInteger(result2)).to.be.true;
            expect(result2).to.equal(comparison);
        });
        it('should give negative integer', () => {
            const result = divide(-divisibleByThree, three);
            const comparison = -divisibleByThree / three;
            expect(Number.isInteger(result)).to.be.true;
            expect(result).to.equal(comparison);

            const result2 = divide(divisibleByThree, -three);
            expect(Number.isInteger(result2)).to.be.true;
            expect(result2).to.equal(comparison);
        });
        it('should give positive decimal, that\'s > 1', () => {
            const result = divide(otherPrime, three);
            const comparison = otherPrime / three;
            expect(Number.isInteger(result)).to.be.false;
            expect(result).to.be.above(1);
            expect(result).to.be.approximately(comparison, delta);
        });
        it('should give negative decimal, that\'s < -1', () => {
            const result = divide(-otherPrime, three);
            const comparison = -otherPrime / three;
            expect(Number.isInteger(result)).to.be.false;
            expect(result).to.be.below(-1);
            expect(result).to.be.approximately(comparison, delta);
        });
        it('should give positive decimal, that\'s 0..1', () => {
            const result = divide(three, otherPrime);
            const comparison = three / otherPrime;
            expect(Number.isInteger(result)).to.be.false;
            expect(result).to.be.below(1);
            expect(result).to.be.above(0);
            expect(result).to.be.approximately(comparison, delta);
        });
        it('should give negative decimal, that\'s > -1..0', () => {
            const result = divide(-three, otherPrime);
            const comparison = -three / otherPrime;
            expect(Number.isInteger(result)).to.be.false;
            expect(result).to.be.below(0);
            expect(result).to.be.above(-1);
            expect(result).to.be.approximately(comparison, delta);
        });
    });
    describe('Edge values', () => {
        it('should give infinity when dividing infinity with finite number', () => {
            const result = divide(Number.POSITIVE_INFINITY, three);
            const comparison = Number.POSITIVE_INFINITY / three;
            expect(result).to.not.be.finite;
            expect(result).to.equal(comparison);
        });
        it('should give NaN when dividing infinity with infinity', () => {
            const result = divide(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
            expect(result).to.be.NaN;
        });
        it('should give 0 when dividing finite number with infinity', () => {
            const result = divide(three, Number.POSITIVE_INFINITY);
            expect(result).to.equal(0);
        });
    });
    describe('Datatypes other than number', () => {
        const numberString = "3";
        const object = {'a': 1};
        it('should give datatype that\'s NaN', () => {
            expect(divide(object, three)).to.be.NaN;
            expect(divide(numberString, object)).to.be.NaN;
        });
        it('should give number', () => {
            expect(typeof divide(numberString, three) === 'number').to.be.true;
            expect(typeof divide(three, numberString) === 'number').to.be.true;
        });
    });
    describe('Dividing by zero', () => {
        it('should give Infinity when dividing integer with zero', () => {
            expect(divide(three, 0)).to.equal(Number.POSITIVE_INFINITY);
        });
        it('should give NaN when dividing zero by zero', () => {
            expect(divide(0, 0)).to.be.NaN;
        });
    });
});
