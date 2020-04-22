import filtersReducer from './filtersReducer';
import expect from 'expect';

describe('`filtersReducer`', () => {
    it('Should be a function', () => {
        expect(filtersReducer).toBeType('function');
    });
    it('Should return the initial state', () => {
        expect(filtersReducer(undefined, {})).toEqual({});
    });
    it('Should return the players in the action', () => {
        const filters = {
          age: '23',
          name: 'Stefano',
          position: 'Keeper'
        };
        const action = {
          type: 'SET_FILTERS',
          filters
        };
        expect(filtersReducer(undefined, action)).toEqual(filters);
    });
});