import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const GET_USERS = 'GET_USERS';

const getUsers = users => ({ type: GET_USERS, users });

export const getUsersFromServer = () => {
  return dispatch => {
    return axios.get('http://localhost:3000/api/users')
      .then(result => result.data)
      .then(users => dispatch(getUsers(users)))
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      // console.log(action.users)
      return action.users;
    default:
      return state;
  }
}

const middleware = applyMiddleware(thunk)

const reducers = combineReducers({ users })
const store = createStore(reducers, middleware)

console.log(reducers.users)

export default store;
