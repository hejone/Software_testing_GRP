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
        });
        it('should give negative integer', () => {
            const result = divide(-divisibleByThree, three);
            const comparison = -divisibleByThree / three;
            expect(Number.isInteger(result)).to.be.true;
            expect(result).to.equal(comparison);
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
            expect(result).to.be.approximately(comparison, delta);
        });
        it('should give negative decimal, that\'s > -1..0', () => {
            const result = divide(-three, otherPrime);
            const comparison = -three / otherPrime;
            expect(Number.isInteger(result)).to.be.false;
            expect(result).to.be.above(-1);
            expect(result).to.be.approximately(comparison, delta);
        });
    });
    describe('Edge values', () => {
        it('dividing infinity with finite number should give infinity', () => {
            const result = divide(Number.POSITIVE_INFINITY, three);
            const comparison = Number.POSITIVE_INFINITY / three;
            expect(result).to.not.be.finite;
            expect(result).to.equal(comparison);
        });
        it('dividing infinity with infinity should give NaN', () => {
            const result = divide(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
            expect(result).to.be.NaN;
        });
        it('dividing finite number with infinity should give 0', () => {
            const result = divide(three, Number.POSITIVE_INFINITY);
            expect(result).to.equal(0);
        });
    });
});
