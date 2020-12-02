import toString from '../src/toString.js';
import chai from "chai";
const expect = chai.expect;


describe('toString.js', () => {
    describe('String type input', () => {
        it('should return a string', () => {
            const string = 'teststring';
            const result = toString(string);
            expect(result).to.eql(string);
        });
    });

    describe('Number type input', () => {
        it('should return \'number\' for a number type input', () => {
            const number = 4;
            const result = toString(number);
            expect(result).to.eql(number.toString());
        });
        it('should return \'-0\' for -0 input', () => {
            const number = -0;
            const result = toString(number);
            expect(result).to.eql('-0');
        });
        it('should return \'Infinity\' for Infinity input', () => {
            const number = Infinity;
            const result = toString(number);
            expect(result).to.eql(number.toString());
        });
    });

    describe('Misc type input', () => {
        const func = (a, b) => a + b;
        it('should return an empty string for an undefined input', () => {
            const input = undefined
            const result = toString(input)
            expect(result).to.eql('')
        })
        it('should return the function definition as a string for a function', () => {
            const funct = func
            const result = toString(funct);
            expect(result).to.eql(funct.toString());
        });
        it('should return object.toString() for an object', () => {
            const obj = {a: 2, b: {c: 'test'}};
            const result = toString(obj);
            expect(result).to.eql(obj.toString());
        });
        it('should return a flattened string representation for an array of arrays', () => {
            const arr = [[2, 3, 4], [5, 6, 7, func]];
            const result = toString(arr);
            expect(result).to.eql('2,3,4,5,6,7,' + func.toString());
        });
    });
});
