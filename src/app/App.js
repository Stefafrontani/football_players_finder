import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux'
import PlayersList from '../player/PlayersList';
import { getPlayers } from '../player/playersListAction';
import Filters from '../filters/Filters';
import store from '../store';
import './styles/App.css';
import '../common/styles/spacing.css';
import '../common/styles/font.css';
import '../common/styles/layout.css';

const App = function() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayers());
  });
  return (
    <div className="App">
      <h1 className="fs30 mb12"> Football Player Finder </h1>
      <section className="players-filter-container">
        <Filters />
        <PlayersList />
      </section>
    </div>
  );
}

const ProviderApp = <Provider store={store}><App /></Provider>

export default ProviderApp;
