import { combineReducers } from 'redux';
import filters from '../filters/filtersReducer';
import playersList from '../player/playersListReducer'

const appReducer = combineReducers({ filters, playersList })

export default appReducer;