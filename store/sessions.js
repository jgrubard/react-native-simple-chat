import axios from 'axios';
import url from './productionURL';
import { AsyncStorage } from 'react-native';

const SET_USER = 'SET_USER';

const setUser = user => ({ type: SET_USER, user });

export const attemptLogin = (credentials) => {
  return dispatch => {
    return axios.post(url + '/api/sessions', credentials)
      .then(result => result.data)
      .then(token => {
        AsyncStorage.setItem('token', token)
        dispatch(exchangeTokenForUser(token));
      })
  }
}

export const exchangeTokenForUser = (token) => {
  return dispatch => {
    return axios.get(url + `/api/sessions/${token}`)
      .then(result => result.data)
      .then(user => dispatch(setUser(user)))
  }
}

export const logoutUser = () => {
  return dispatch => {
    AsyncStorage.removeItem('token');
    dispatch(setUser({}));
  }
}

const store = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}

export default store;




// const SET_USER = 'SET_USER';

// const setUser = user => ({ type: SET_USER, user });

// export const attemptLogin = user => {
//   return dispatch => dispatch(setUser(user))
// }

// const store = (state = {}, action) => {
//   switch (action.type) {
//     case SET_USER:
//       return action.user;
//     default:
//       return state;
//   }
// }

// export default store;
