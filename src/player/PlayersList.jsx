import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'
import './playerStyles/PlayersList.css';

const playersListHeaders = ['player', 'position', 'nationality', 'age'];

const PlayersList = () => {
  const players = useSelector(state => state.playersList)
  const currenyYear = new Date().getFullYear();
  return (
    <Fragment>
      <div className="margin-auto table-container">
        {players.length
          ? <table>
            <thead>
              <tr>
                {playersListHeaders.map((header, index) => {
                  return (
                    <th key={header}>{header}</th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => {
                const yearOfBirth = new Date(String(player.dateOfBirth)).getFullYear();
                return (
                  <tr key={index}>
                    <td>{player.name ? player.name : '--'}</td>
                    <td>{player.nationality ? player.nationality : '--'}</td>
                    <td>{player.position ? player.position : '--'}</td>
                    <td>{yearOfBirth ? currenyYear - yearOfBirth : '--'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        : <p>No data available</p> }
      </div>
    </Fragment>
  );
};

export default PlayersList;