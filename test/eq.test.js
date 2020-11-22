import eq  from '../src/eq.js';
import chai from "chai"
const expect = chai.expect;


describe('Eq.js', () => {
    describe('Testing equality of different types', () => {
		const number = Math.random() * 1000;
		const string = number.toString();
		const array = [number];
		const object = {number: number};	
		it('should evaluate two of the same type and value as equal', () => {
			expect(eq(number, number)).to.be.true;
			expect(eq(string, string)).to.be.true;
			expect(eq(array, array)).to.be.true;
			expect(eq(object, object)).to.be.true;
		});
		it('should evaluate two other types as equal when value is same', () => {
			expect(eq(number, string)).to.be.true;
			expect(eq(number, array)).to.be.true;
			expect(eq(string, object.number)).to.be.true;
			expect(eq(object.number, array));
		});
		it('should evaluate NaN, null and undefined as equal with same type', () => {
			const nan = Number.NaN;
			const null_val = null;
			const undefined_val = undefined;
			expect(eq(nan, nan)).to.be.true; // Not in vanilla JS
			expect(eq(null_val, null_val)).to.be.true;
			expect(eq(undefined_val, undefined_val)).to.be.true;
			expect(eq(null_val, undefined_val)).to.be.true;
			expect(eq(nan, undefined_val)).to.be.false;
		});
    });
});
