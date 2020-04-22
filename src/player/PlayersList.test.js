import React from 'react';
import PlayersList from './PlayersList';
import { initializeMockProvider } from '../store/mock';

describe('PlayersList component', () => {
  describe('When no players are available', () => {
    it('Should render a "No data available" message', () => {
      const { MockProvider } = initializeMockProvider({ playersList: [] })
      const wrapper = mount(<MockProvider><PlayersList/></MockProvider>)

      expect(wrapper.find('p').text()).toEqual('No data available');
    });

    it('Should render the "No data available" message inside a div with specific classes', () => {
      const { MockProvider } = initializeMockProvider({ playersList: [] })
      const wrapper = mount(<MockProvider><PlayersList/></MockProvider>)

      expect(wrapper.find('div')).toHaveLength(1);
      expect(wrapper.find('div').hasClass('margin-auto table-container')).toBe(true);
    });
  });

  describe('When players are available', () => {
    it('Should render the same amount table rows as players in playersList', () => {
      const { MockProvider } = initializeMockProvider({ playersList })
      const wrapper = mount(<MockProvider><PlayersList/></MockProvider>)

      expect(wrapper.find('tbody tr')).toHaveLength(2);
    });

    it('Should render the information of each player as expected', () => {
      const { MockProvider } = initializeMockProvider({ playersList })
      const wrapper = mount(<MockProvider><PlayersList/></MockProvider>)

      expect(wrapper.find('tbody tr').at(0).children('td').at(0).text()).toEqual('Stefano Frontani');
      expect(wrapper.find('tbody tr').at(0).children('td').at(1).text()).toEqual('Argentine');
      expect(wrapper.find('tbody tr').at(0).children('td').at(2).text()).toEqual('Base');
      expect(wrapper.find('tbody tr').at(0).children('td').at(3).text()).toEqual('27');
    });

    it('Should render four tds for each table row', () => {
      const { MockProvider } = initializeMockProvider({ playersList })
      const wrapper = mount(<MockProvider><PlayersList/></MockProvider>)

      expect(wrapper.find('tr td')).toHaveLength(8);
    });

    it('Should render the information of each player as expected', () => {
      const { MockProvider } = initializeMockProvider({ playersList })
      const wrapper = mount(<MockProvider><PlayersList/></MockProvider>)

      expect(wrapper.find('tbody tr').at(0).children('td').at(0).text()).toEqual('Stefano Frontani');
      expect(wrapper.find('tbody tr').at(0).children('td').at(1).text()).toEqual('Argentine');
      expect(wrapper.find('tbody tr').at(0).children('td').at(2).text()).toEqual('Base');
      expect(wrapper.find('tbody tr').at(0).children('td').at(3).text()).toEqual('27');
    });
  });
});


const playerOneName = "Stefano Frontani";
const playerTwoName = "Bruno Frontani";

const playerOneNationality = "Argentine";
const playerTwoNationality = "Argentine";

const playerOnePosition = "Base";
const playerTwoPosition = "Alero";

const playerOneDateOfBirth = "1993-09-26";
const playerTwoDateOfBirth = "1999-03-08";

const playersList = [
  {
    name: playerOneName,
    nationality: playerOneNationality,
    position: playerOnePosition,
    dateOfBirth: playerOneDateOfBirth
  },
  {
    name: playerTwoName,
    nationality: playerTwoNationality,
    position: playerTwoPosition,
    dateOfBirth: playerTwoDateOfBirth
  }
]