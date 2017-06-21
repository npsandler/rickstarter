import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {

    currentUser: null,
    errors: []

};


const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      newState.currentUser = null;
      // not necessary to clear currentUser
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
