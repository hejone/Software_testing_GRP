import ceil from '../src/ceil.js';
import chai from "chai"
const expect = chai.expect;


describe('ceil.js', () => {
      it('should ceil correctly from a 14 digit number to a 15 digit number', () => {
        const x = 99999999999999;
        expect(ceil(x, -14)).to.eql(100000000000000);
      });
      it('should ceil correctly a number with 17 decimal places', () => {
        const x = 0.30000000000000004
        expect(ceil(x, 16)).to.eql(0.30000000000000010);
      });
      it('should ceil a negative number correcly', () => {
        const x = -9.1
        expect(ceil(x)).to.eql(-9);
      });
      it('should return NaN for undefined input', () => {
        const x = undefined
        expect(ceil(x)).to.eql(NaN)
      })
});
