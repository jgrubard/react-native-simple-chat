const SET_USER = 'SET_USER';

const setUser = user => ({ type: SET_USER, user });

export const logInUser = user => {
  return dispatch => dispatch(setUser(user))
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
