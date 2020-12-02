import defaultTo  from '../src/defaultTo.js';
import chai from "chai"
const expect = chai.expect;


describe('defaultTo.js', () => {
    describe('should default', () => {
        it('should return default value with NaN', () => {
          const defaultInput = 10
          const input = NaN
          expect(defaultTo(input, defaultInput)).to.eql(defaultInput);
        });
        it('should return default value with undefined', () => {
          const defaultInput = 10
          const input = undefined
          expect(defaultTo(input, defaultInput)).to.eql(defaultInput);
        });
        it('should return default value with null', () => {
          const defaultInput = 10
          const input = null
          expect(defaultTo(input, defaultInput)).to.eql(defaultInput);
        });
    });
    describe('should not default', () => {
        it('should return value with a number', () => {
          const defaultInput = 10
          const input = 24
          expect(defaultTo(input, defaultInput)).to.eql(input);
        });
        it('should return value with an object', () => {
          const defaultInput = 10
          const input = {a: 25}
          expect(defaultTo(input, defaultInput)).to.eql(input);
        });
        it('should return value with an array', () => {
          const defaultInput = 10
          const input = [2, 3, 4, 5]
          expect(defaultTo(input, defaultInput)).to.eql(input);
        });
        it('should return value with a string', () => {
          const defaultInput = 10
          const input = 'string'
          expect(defaultTo(input, defaultInput)).to.eql(input);
        });
    });
});
