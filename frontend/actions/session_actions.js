
import * as APIUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const logIn = (user) => (dispatch) => {
  return APIUtil.logIn(user)
    .then(user => {
      return dispatch(receiveCurrentUser(user));
    }, err => dispatch(receiveErrors(err.responseJSON)));
};

export const signUp = (user) => (dispatch) => {
  return APIUtil.signUp(user)
    .then(user => {
      return dispatch(receiveCurrentUser(user));
    });
};

export const logOut = () => (dispatch) => {
  return APIUtil.logOut()
    .then(() => {
      return dispatch(receiveCurrentUser(null));
    });
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};
export const receiveErrors = (errors) => {
  errors ? errors : []
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
