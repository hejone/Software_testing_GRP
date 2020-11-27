import eq  from '../src/eq.js';
import chai from "chai"
const expect = chai.expect;


describe('Eq.js', () => {
	const number = 3;
	const string = number.toString();
	const array = [number];
	const object = {number: number};
    describe('Testing equality of different types', () => {
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
			expect(eq(object.number, array)).to.be.true;
		});
		it('should evaluate NaN, null and undefined as equal with same type', () => {
			const nan = Number.NaN;
			expect(eq(nan, nan)).to.be.true; // Not in vanilla JS
			expect(eq(null, null)).to.be.true;
			expect(eq(undefined, undefined)).to.be.true;
			expect(eq(null, undefined)).to.be.true;
			expect(eq(nan, undefined)).to.be.false;
		});
	});
	describe('Testing inequality of different types', () => {
		const number2 = 4;
		const string2 = number2.toString();
		const array2 = [number2];
		const object2 = {number: number2};
		it('should evaluate two of the same type and but different value as inequal', () => {
			expect(eq(number, number2)).to.be.false;
			expect(eq(string, string2)).to.be.false;
			expect(eq(array, array2)).to.be.false;
			expect(eq(object, object2)).to.be.false;
		});
		it('should evaluate two other types as inequal when value is different', () => {
			expect(eq(number2, string)).to.be.false;
			expect(eq(number2, array)).to.be.false;
			expect(eq(string2, object.number)).to.be.false;
			expect(eq(object2.number, array)).to.be.false;
		});
	});
});
