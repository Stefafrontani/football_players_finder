import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from '../app/appReducer';

const store = createStore(appReducer, applyMiddleware(thunk, logger));

export default store;