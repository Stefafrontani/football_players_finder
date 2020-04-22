import React from 'react';
import Filters from './Filters';
import { initializeMockProvider } from '../store/mock';

describe('<Filters />', () => {
    let wrappedComponent;
    beforeAll(() => {
        const { MockProvider } = initializeMockProvider({});
        wrappedComponent = <MockProvider><Filters /></MockProvider>
    });
    it('Snapasdhot', () => {
        const component = renderer.create(wrappedComponent);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('', () => {
        const wrapper = shallow(wrappedComponent);
        expect(true).toBe(true);
    });
});