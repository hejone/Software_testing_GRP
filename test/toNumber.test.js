import toNumber  from '../src/toNumber.js';
import chai from "chai";
const expect = chai.expect;


describe('toNumber.js', () => {
    describe('String type input', () => {
        it('should return a number for a hexadecimal input string', () => {
            const number = '0xa8206c5fcfb6a2527fb8540ab543b4701f4c86d1c21862ad89fa220c84bad260';
            const result = toNumber(number);
            expect(result).to.eql(parseInt(number));
        });
        it('should return a number for an octal input string', () => {
            const number = '0o25465240367171073316355040725766732451';
            const result = toNumber(number);
            expect(result).to.eql(parseInt(number.slice(2), 8));
        });
        it('should return a number for a binary input string', () => {
            const number = '0b1111100001111110001';
            const result = toNumber(number);
            expect(result).to.eql(parseInt(number.slice(2), 2));
        });
        it('should return a number for a decimal input string', () => {
            const number = '20040';
            const result = toNumber(number);
            expect(result).to.eql(parseInt(number));
        });
        it('should return NaN for a string that does not represent a number' , () => {
            const notanumber = 'a2sd';
            const result = toNumber(notanumber);
            expect(result).to.eql(NaN);
        });
        it('should return a number for a string with leading or trailing whitespace that represents a number', () => {
            const number = ' 25       '
            const result = toNumber(number);
            expect(result).to.eql(25);
        });
        it('should return 0 for an empty string', () => {
           const emptyString = ''
           const result = toNumber(emptyString);
           expect(result).to.eql(0);
        });
    });

    describe('Number type input', () => {
        it('should return a number for a number type input', () => {
            const number = 4;
            const result = toNumber(number);
            expect(result).to.eql(number);
        });
        it('should return -0 for -0 input', () => {
            const number = -0;
            const result = toNumber(number);
            expect(result).to.eql(number);
        });
        it('should return Infinity for Infinity input', () => {
            const number = Infinity;
            const result = toNumber(number);
            expect(result).to.eql(number);
        });
    });

    describe('Other types of input', () => {
        it('should return NaN for undefined input', () => {
            const input = undefined;
            expect(toNumber(input)).to.eql(NaN);
        });
        it('should return NaN for an object', () => {
            const notanumber = {a: 2};
            const result = toNumber(notanumber);
            expect(result).to.eql(NaN);
        });
        it('should return a number for an array with a single number element', () => {
            const number = ['  2 ']
            const result = toNumber(number);
            expect(result).to.eql(2);
        });
    });
});
