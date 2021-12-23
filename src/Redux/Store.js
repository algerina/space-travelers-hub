import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer,
  rocketReducer,
});

const Store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default Store;
