import isEmpty from '../src/isEmpty.js';
import chai from "chai";
const expect = chai.expect;

const array = [1,2,3];
const emptyArray = [];
const object = {'a': 1};
const emptyObject = {};
const string = "test_string";
const emptyString = "";
const map = new Map();
map.set('a', {"value": 1});

function Proto(param1) {
    this.attr = param1;
}

describe('IsEmpty.js', () => {
    describe('Testing with objects, strings and arrays', () => {
        it('should return true for empty objects',() => {
            expect(isEmpty(emptyArray)).to.be.true;
            expect(isEmpty(emptyString)).to.be.true;
            expect(isEmpty(emptyObject)).to.be.true;
        });
        it('should return false for non-empty objects', () => {
            expect(isEmpty(array)).to.be.false;
            expect(isEmpty(string)).to.be.false;
            expect(isEmpty(object)).to.be.false;
        });
    }); 
    describe('Testing other datatypes', () => {
        it('should return true for null, NaN, undefined', () => {
            expect(isEmpty(null)).to.be.true;
            expect(isEmpty(NaN)).to.be.true;
            expect(isEmpty(undefined)).to.be.true;
        });
        it('should return true for non-objects', () => {
            expect(isEmpty(1)).to.be.true;
            expect(isEmpty(1.1)).to.be.true;
            expect(isEmpty(Number.POSITIVE_INFINITY)).to.be.true;
        });
        it('should return true for empty self defined classes', () => {
            const tester = new Proto(1);
            delete tester.attr;
            expect(isEmpty(tester)).to.be.true;
        });
        it('should return false for non-empty self defined classes', () => {
            const tester = new Proto(1);
            expect(isEmpty(tester)).to.be.false;
        });
        it('should return true for empty Map', () => {
            map.clear();
            expect(isEmpty(map)).to.be.true;
        });
        it('should return false for non-empty Map', () => {
            expect(isEmpty(map)).to.be.false;
        });
    });
});
