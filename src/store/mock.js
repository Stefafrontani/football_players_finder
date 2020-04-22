import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockApplicationState = {
    filters: {},
    playersList: []
}

const mockServiceCreator = (body, succeeded = true) => () =>
    new Promise((resolve, reject) => {
        setTimeout(() => succeeded ? resolve(body) : reject(body), 100)
    })

const getMockProvider = (partialState) => {
    const mockStore = configureMockStore();
    const stateToApply = partialState ? { ...mockApplicationState, ...partialState } : mockApplicationState;
    const store = mockStore(stateToApply);

    return {
        MockProvider: ({ children }) => {
            return <Provider store={store}>{children}</Provider>
        }
    };
};

const initializeMockProvider = (partialState) => {
    const { MockProvider } = getMockProvider(partialState);

    return {
      MockProvider
    }
  }

export { mockStore, getMockProvider, initializeMockProvider, mockServiceCreator };