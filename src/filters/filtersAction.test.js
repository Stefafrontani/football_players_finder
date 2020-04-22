import { setFilters } from './filtersAction';

describe('"setFilters" action', () => {
    let filters, expectedActionCalledValue, actionCalledValue
    beforeAll(() => {
        filters = {
            name: 'Stefano Frontani',
            age: 26,
            position: 'Base',
        };
        expectedActionCalledValue = {
            type: "SET_FILTERS",
            filters: filters
        };
        actionCalledValue = setFilters(filters);
    });

    it('Should return an object', () => {
        expect(actionCalledValue).toBeType('object');
    });

    it('Should have a "type" key with "SET_FILTERS" value', () => {
        expect(actionCalledValue).toHaveProperty("type", "SET_FILTERS");
    });

    it('Should have a "filters" key with the filters passed as argument as value', () => {
        expect(actionCalledValue).toHaveProperty("filters", filters);
    });
});