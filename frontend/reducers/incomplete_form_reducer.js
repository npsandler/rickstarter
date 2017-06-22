import { RECEIVE_INCOMPLETE_FORM } from '../actions/incomplete_form_actions';
import { recieveIncompleteForm } from '../actions/incomplete_form_actions';
import { merge } from 'lodash';
import { combineReducers } from "redux";

const incompleteFormReducer = ( state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INCOMPLETE_FORM:
      return merge({}, state, action.project);
    default:
      return state;
  }
};

export default incompleteFormReducer;
