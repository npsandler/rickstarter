export const RECEIVE_INCOMPLETE_FORM = 'RECEIVE_INCOMPLETE_FORM';
export const RECEIVE_INCOMPLETE_REWARD = 'RECEIVE_INCOMPLETE_REWARD';
export const RECEIVE_BLANK_REWARD = 'RECEIVE_BLANK_REWARD'


export const receiveIncompleteForm = (project) => {
  return {
    type: RECEIVE_INCOMPLETE_FORM,
    project
  };
};

export const receiveIncompleteReward = (reward, idx) => {
  return ({
      type: RECEIVE_INCOMPLETE_REWARD,
      reward,
      idx
  }
  )
}

export const receiveBlankReward = () => {
  return {
    type: RECEIVE_BLANK_REWARD
  }
}
