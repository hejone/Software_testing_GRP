import isDate  from '../src/isDate.js';
import chai from "chai"
const expect = chai.expect;


describe('isDate.js', () => {
    it('should return true for a date object', () => {
      const input = new Date()
      expect(isDate(input)).to.eql(true);
    });

    it('should return false for an object', () => {
      const input = {test: 1}
      expect(isDate(input)).to.eql(false);
    });

    it('should return false for a number', () => {
      const input = 2001
      expect(isDate(input)).to.eql(false);
    });

    it('should return false for an array', () => {
      const input = [2, 3]
      expect(isDate(input)).to.eql(false);
    });
});
