import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import users from './users';
import user from './sessions';

const reducer = combineReducers({ users, user });

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export default store;

export * from './users';
export * from './sessions';
