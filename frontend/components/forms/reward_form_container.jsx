import React from 'react';
import { connect } from 'react-redux';
import RewardForm from './reward_form';


const mapStateToProps = ({errors, incompleteForm}) => {
  return {
    errors,
    incompleteForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
    };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
