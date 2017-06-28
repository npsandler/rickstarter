import * as APIUtil from '../util/reward_api_util';

export const RECEIVE_ALL_REWARDSS = 'RECEIVE_ALL_REWARDSS';
export const RECEIVE_SINGLE_REWARDS = 'RECEIVE_SINGLE_REWARDS';
export const CREATE_REWARDS = 'CREATE_REWARDS';
export const DELETE_REWARDS = 'DELETE_REWARDS';
export const EDIT_REWARDS = 'EDIT_REWARDS';
export const RECEIVE_REWARDS_ERRORS = 'RECEIVE_REWARDS_ERRORS';

import { updateProject, receiveSingleProject } from './project_actions';


export const requestAllRewards = () => (dispatch) => {
  return APIUtil.fetchAllRewards()
    .then(rewards => dispatch(receiveAllRewards(rewards)));
};

export const requestSingleReward = (rewardId) => (dispatch) => {
  return APIUtil.fetchSingleReward(rewardId)
    .then(reward => dispatch(receiveSingleReward(reward)));
};

export const createReward = (reward) => (dispatch) => {
    return (
      APIUtil.createReward(reward)
    .then( (reward) => dispatch(receiveSingleReward(reward)))
  ), err => dispatch(receiveErrors(err.responseJSON));
};

export const createPledge = (reward) => dispatch => {
  return (
    APIUtil.addPledge(reward)
    .then( (project) =>  dispatch(receiveSingleProject(project)))
  );
};



export const editReward = reward => {
  return {
    type: EDIT_PROJECT,
    reward
  };
};

export const receiveAllRewards = rewards => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    rewards
  };
};

export const receiveSingleReward = reward => {
  return {
    type: RECEIVE_SINGLE_PROJECT,
    reward
  };
};

export const receiveRewardErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});
