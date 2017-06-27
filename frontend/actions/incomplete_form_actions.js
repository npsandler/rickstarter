export const RECEIVE_INCOMPLETE_FORM = 'RECEIVE_INCOMPLETE_FORM';



export const receiveIncompleteForm = (project, rewards) => {
  return {
    type: RECEIVE_INCOMPLETE_FORM,
    project,
    rewards
  };
};
