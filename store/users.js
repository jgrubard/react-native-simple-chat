import axios from 'axios';
import url from './productionURL';

const GET_USERS = 'GET_USERS';

const getUsers = users => ({ type: GET_USERS, users });

export const getUsersFromServer = () => {
  return dispatch => {
    return axios.get(url + '/api/users')
      .then(result => result.data)
      .then(users => dispatch(getUsers(users)))
      .catch(err => console.error(err))
  }
}

const store = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}

export default store;
