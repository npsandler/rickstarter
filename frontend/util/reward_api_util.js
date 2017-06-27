export const fetchAllRewards = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/rewards'
  });
};


export const createReward= (reward) => {
  return $.ajax({
    method: 'POST',
    url: 'api/rewards/',
    data: reward
  });
};

export const editReward= (reward) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/rewards/${reward.rewardId}`,
    data: { reward }
  });
};

export const addPledge = (reward) => {
  let reward_id = reward.id;
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/pledges',
    data: { 'reward_id': reward_id }
  });
};
