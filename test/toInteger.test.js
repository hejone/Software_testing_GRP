import toInteger  from '../src/toInteger.js';
import chai from "chai";
const expect = chai.expect;

describe('toInteger.js', () => {
    describe('Testing numbers', () => {
        it('should return integer with integers', () => {
            expect(toInteger(3)).to.equal(3);
            expect(toInteger(-3)).to.equal(-3);
            expect(toInteger(-0)).to.equal(0);
            expect(toInteger(+3)).to.equal(3);
        });

        it('should return correct integer with floats', () => {
            expect(toInteger(1.3)).to.equal(1);
            expect(toInteger(-1.3)).to.equal(-1);
            expect(toInteger(0.0)).to.equal(0);
        });

        it('should work with Infinity and -Infinity', () => {
            expect(toInteger(Number.POSITIVE_INFINITY)).to.equal(Number.MAX_VALUE);
            expect(toInteger(Number.NEGATIVE_INFINITY)).to.equal(-Number.MAX_VALUE);
        });

        it('should return 0 with MIN_VALUE', () => {
            expect(toInteger(Number.MIN_VALUE)).to.equal(0);
        });

    });

    describe('Testing with other datatypes', () => {
        it('should return integer with strings that contain only numbers', () => {
            expect(toInteger('4')).to.equal(4);
            expect(toInteger('4.2')).to.equal(4);
            expect(toInteger('-5')).to.equal(-5);
            expect(toInteger('+3')).to.equal(3);
        });

        it('should return 0 with strings that contain other charcters than numbers', () => {
            expect(toInteger('test')).to.equal(0);
            expect(toInteger('A34')).to.equal(0);
            expect(toInteger('-3rt')).to.equal(0);
            expect(toInteger('')).to.equal(0);
        });

        it('should return integer with arrays that length == 1 and zero all other sized arrays', () => {
            expect(toInteger([2.2])).to.eql(2);
            expect(toInteger([1, 2])).to.eql(0);
            expect(toInteger([])).to.eql(0);
        });

        it('should return 0 with other datatypes', () => {
            expect(toInteger({'a': 1})).to.eql(0);
            const func = () => {return 4};
            expect(toInteger(func)).to.eql(0);
        });
    });
});
