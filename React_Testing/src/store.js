import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import combineReducers from './modules/reducers';

export const history = createHistory();
export const store = createStore(combineReducers);
