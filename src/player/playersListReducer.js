export const initialState = []

function playerListReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PLAYERS':
      return action.players
    case 'SET_FILTERS':
      const currenyYear = new Date().getFullYear();
      const filteredName = action.filters.name;
      const filteredPosition = action.filters.position;
      const filteredAge = action.filters.age;
      return state.filter((player) => {
        return player.name === filteredName && player.position === filteredPosition && (currenyYear - new Date(String(player.dateOfBirth)).getFullYear()) === Number(filteredAge)
      });
    default:
      return state
    }
}

export default playerListReducer;