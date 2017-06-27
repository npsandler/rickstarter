import { RECEIVE_INCOMPLETE_FORM } from '../actions/incomplete_form_actions';
import { receiveIncompleteForm } from '../actions/incomplete_form_actions';
import { merge } from 'lodash';
import { combineReducers } from "redux";

const defaultState = {
  project: {
  category: "Art",
  title: "Title",
  description: '',
  end_date: null,
  funding_goal: null,
  details: 'The creator of this project has not added any details yet!',
  image: null,
  imageUrl: null
  },
  rewards: []
}

const incompleteFormReducer = ( state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_INCOMPLETE_FORM:
      return merge({}, state, {project: action.project, rewards: action.rewards});
    default:
      return state;
  }
};

export default incompleteFormReducer;
