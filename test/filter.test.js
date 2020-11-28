import filter  from '../src/filter.js';
import chai from "chai";
const expect = chai.expect;

const onlyOddValuesObj = (n) => {
    return n['a'] % 2 !== 0; 
};

const onlyOddValues = (n) => {
    return n % 2 !== 0;
}

const iterateeWithIndex = (n, index) => {
    return n === index + 1;
};

const noFilter = (n) => {
    return true;
}

const iterateeWithIndexArray = (n, index, array) => {
    return array[index] === index + n;
};

const array = [1, 2, 3, 4, 5];

describe('filter.js', () => {
    describe('Testing with arrays', () => {
        it('should return correct array when something or nothing is filtered', () => {
            let result = filter(array, onlyOddValues);
            expect(result).to.eql([1, 3, 5], 'only iteratee');

            result = filter(array, iterateeWithIndex);
            expect(result).to.eql(array, 'iteratee with index');

            result = filter(array, iterateeWithIndexArray);

            expect(result).to.eql([1], 'iteratee with index and array');
        });

        it('should return [[]] if everything is filtered', () => {
            expect(filter([-1,3], iterateeWithIndex)).to.eql([[]]);
        });

        it('should return [[]] with empty array', () => {
            expect(filter([], onlyOddValues)).to.eql([[]]);
        });
    });

    describe('Testing with other datatypes', () => {
        it('should return correct array for object arrays', () => {
            const obj = [{'a': 1, 'b': 2}, {'a': 2, 'b': 3}, {'a': 3}, {'b': 4}];
            const result = filter(obj, onlyOddValuesObj);
            expect(result).to.eql([{'a': 1, 'b': 2}, {'a': 3}, {'b': 4}]);

            expect(filter(obj, ({b}) => b % 2 === 0)).to.eql([{'a': 1, 'b': 2}, {'b': 4}]);
        });

        it('should return correct array with strings', () => {
            const string = '12345';
            let result = filter(string, noFilter);
            expect(result).to.eql(['1', '2', '3', '4', '5']); 

            result = filter(string, a => a === '1');
            expect(result).to.eql(['1']);
        });

        it('should return [[]] with objects and null', () => {
            const obj = {'a': 1, 'b': 2};
            expect(filter(obj, noFilter)).to.eql([[]]);

            expect(filter(null, noFilter)).to.eql([[]]);
        });

        it('should throw an error without iteratee', () => {
            try {
            expect(filter(array)).to.throw('TypeError: predicate is not a function');
            } catch(err) {
                // Nothing
            }
        });
    });
});
