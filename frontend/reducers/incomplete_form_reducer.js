import { RECEIVE_INCOMPLETE_FORM, RECEIVE_BLANK_REWARD, RECEIVE_INCOMPLETE_REWARD } from '../actions/incomplete_form_actions';
import { receiveIncompleteForm } from '../actions/incomplete_form_actions';
import { merge } from 'lodash';
import { combineReducers } from "redux";

const defaultReward = {
  title: "",
  description: "",
  pledge_amount: 5,
  num_allowed: null
};

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
  rewards: [defaultReward]
};

const incompleteFormReducer = ( state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_INCOMPLETE_FORM:
      return merge({}, state, {project: action.project, rewards: action.rewards});
    case RECEIVE_BLANK_REWARD:
      newState.rewards.push(defaultReward);
      return newState;
    case RECEIVE_INCOMPLETE_REWARD:
      newState.rewards[action.idx] = action.reward;
      return newState;
    default:
      return state;
  }
};

export default incompleteFormReducer;
