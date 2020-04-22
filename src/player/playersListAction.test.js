import React from 'react';
import { getPlayers } from './playersListAction';
import { mockStore, mockServiceCreator } from '../store/mock';


describe('PlayersList component', () => {
    const initialState = {};
    describe('when succesfull fetch players', () => {
        let store;
        beforeEach(() => {
            store = mockStore(initialState)
        });

        it('Should dispatch set players', () => {
            const players = [{}, {}]
            return store.dispatch(getPlayers(mockServiceCreator(players)))
                .then(() => {
                    return expect(store.getActions()).toContainEqual({ players, type: "SET_PLAYERS" })
                });
        });
    });
});