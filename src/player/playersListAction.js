function setPlayers(players) {
  return {
    type: 'SET_PLAYERS',
    players
  }
}

function getPlayersService() {
  return fetch('https://football-players-b31f2.firebaseio.com/players.json?print=prett')
    .then(data => {
      return data.json();
    });
};

const getPlayers = (service = getPlayersService) => (dispatch) => {
  return service()
    .then(players => {
      dispatch(setPlayers(players));
    })
};

export { getPlayers };