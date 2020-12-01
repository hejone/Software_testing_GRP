import upperFirst  from '../src/upperFirst.js';
import chai from "chai"
const expect = chai.expect;


describe('upperFirst.js', () => {
    describe('Testing strings', () => {
        it('should return a capitalized string for an all lowercase string', () => {
          const input = 'test string'
          expect(upperFirst(input)).to.eql('Test string');
        });
        it('should not change other than first character', () => {
          const input = 'tESt String'
          expect(upperFirst(input)).to.eql('TESt String');
        });

        it('should do nothing for an already capitalized string', () => {
          const input = 'Test string'
          expect(upperFirst(input)).to.eql(input);
        });
        it('should return an empty string for an empty string', () => {
          const input = ''
          expect(upperFirst(input)).to.eql(input);
        });
    });
    describe('Other types of input', () => {
        it('should return number as a string', () => {
            let input = 2;
            expect(upperFirst(input)).to.eql(input.toString());
        });
        it('should return array as a string with first letter of the first word capitalized', () => {
            const input = ['teSt', 2, 3, 'test2']
            expect(upperFirst(input)).to.eql('TeSt,2,3,test2');
        });
    });
});
