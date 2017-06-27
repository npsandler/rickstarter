import React from 'react';
import { connect } from 'react-redux';
import RewardForm from './reward_form';
import { receiveIncompleteForm, receiveBlankReward, receiveIncompleteReward } from '../../actions/incomplete_form_actions';


const mapStateToProps = ({errors, incompleteForm}) => {
  return {
    errors,
    incompleteForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveIncompleteForm:  (project, rewards) => dispatch(receiveIncompleteForm(project, rewards)),
    receiveIncompleteReward: (reward, idx) => dispatch(receiveIncompleteReward(reward, idx)),
    receiveBlankReward: () => dispatch(receiveBlankReward())
    };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
