import { RECEIVE_ALL_REWARDS, DELETE_REWARD, EDIT_REWARD} from '../actions/reward_actions';
import { merge } from 'lodash';
import { combineReducers } from "redux";

const rewardReducer = ( state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_REWARDS:
      return merge({}, state, action.rewards);
    case DELETE_REWARD:
      const newState = merge({}, state);
      delete newState[action.reward.id];
      return newState;
      case EDIT_REWARD:
      return merge({}, state, action.reward);
    default:
      return state;
  }
};




export default rewardReducer;
