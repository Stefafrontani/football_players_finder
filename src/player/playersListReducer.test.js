import playersListReducer from './playersListReducer';
import { players } from './mock.json';

describe('`playersListReducer`', () => {
    it('Should be a function', () => {
        expect(playersListReducer).toBeType('function');
    });
    it('Should return the initial state', () => {
        expect(playersListReducer(undefined, {})).toEqual([]);
    });
    it('Should return the players in the action', () => {
        expect(playersListReducer(undefined, { type: 'SET_PLAYERS', players })).toEqual(players);
    });
    it('Should filter the players in the action', () => {
        const action = {
            type: 'SET_FILTERS',
            filters: {
                age: '24',
                name: 'Joel Pereira',
                position: 'Keeper'
            }
        };
        const filteredPlayersList = [
            {
                "contractUntil": "2021-06-30",
                "dateOfBirth": "1996-06-28",
                "jerseyNumber": 40,
                "name": "Joel Pereira",
                "nationality": "Portugal",
                "position": "Keeper"
            },
        ];
        expect(playersListReducer(players, action)).toEqual(filteredPlayersList);
    });
})