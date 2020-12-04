import capitalize  from '../src/capitalize.js';
import chai from "chai"
const expect = chai.expect;


describe('Capitalize.js', () => {
    describe('Testing strings', () => {
        it('should return a capitalized string for an all lowercase string', () => {
          const input = 'test string'
          expect(capitalize(input)).to.eql('Test string');
        });
        it('should convert remaining characters to lowercase', () => {
          const input = 'tEST String'
          expect(capitalize(input)).to.eql('Test string');
        });

        it('should do nothing for an already capitalized string', () => {
          const input = 'Test string'
          expect(capitalize(input)).to.eql(input);
        });
        it('should return an empty string for an empty string', () => {
          const input = ''
          expect(capitalize(input)).to.eql(input);
        });
    });
    describe('Other types of input', () => {
        it('should return number as a string', () => {
            let input = 2;
            expect(capitalize(input)).to.eql(input.toString());
        });
        it('should return array as a string with first word capitalized', () => {
            const input = ['test', 2, 3, 'test2']
            expect(capitalize(input)).to.eql('Test,2,3,test2');
        });
        it('should return empty string for undefined input', () => {
            const input = undefined
            expect(capitalize(input)).to.eql('Undefined');
        })
    });
});
