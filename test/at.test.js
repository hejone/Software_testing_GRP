import at  from '../src/at.js';
import chai from "chai"
const expect = chai.expect;


describe('At.js', () => {
    const testObj1 = {'a': [1, 2, 4, 8, 16]};
    const testObj2 = {'a': [1, {'b': {'c': 4}}, [6,7], '7']};
    const testObj3 = {'a': [{'b': [4,5], 'c': 1}, 8], 'd': 3};
    const testObj4 = [0, '0', NaN];
    describe('Testing paths that exists', () => {
        it('should give correct one value array', () => {
            expect(at(testObj1, 'a[0]')).to.eqls([1]);

            expect(at(testObj2, 'a[0]')).to.eqls([1]);
            expect(at(testObj2, 'a[1].b.c')).to.eqls([4]);
            expect(at(testObj2, 'a[2][0]')).to.eqls([6]);
            expect(at(testObj2, 'a[3]')).to.eqls(['7']);

            expect(at(testObj3, 'd')).to.eqls([3]);
            expect(at(testObj3, 'a[0].b[0]')).to.eqls([4]);

            expect(at(testObj4, '[2]')).to.eqls([NaN]);
        });
        it('should give correct array of any size', () => {
            expect(at(testObj1, 'a[0]', 'a[1]', 'a[2]')).to.eqls([1, 2, 4]);
            expect(at(testObj2, 'a[2]')).to.eqls([[6, 7]]);
        });
    });

    describe("Testing paths that doesn't exists", () => {
        it('should give undefined (in array)', () => {
            expect(at(testObj1, '[0]')).to.eqls([undefined]);
            expect(at(testObj3, 'd[0]')).to.eqls([undefined]);
            expect(at(testObj2, 'a[0].b[0]')).to.eqls([undefined]);
        });
    });
});
