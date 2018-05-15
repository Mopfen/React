import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import combineReducers from './modules/reducers';
import ReduxThunk from 'redux-thunk';

export const history = createHistory();
export const store = createStore(combineReducers, applyMiddleware(ReduxThunk));
