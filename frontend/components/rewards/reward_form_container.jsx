import React from 'react';
import { connect } from 'react-redux';
import RewardForm from './reward_form';


const mapStateToProps = ({errors, reward}) => {
  return {
    errors,
    reward
  };
};

const mapDispatchToProps = dispatch => {
  return {
      createReward: (reward) => dispatch(createReward(reward))
    };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
