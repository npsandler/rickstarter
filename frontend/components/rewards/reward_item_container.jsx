import React from 'react';
import { connect } from 'react-redux';
import RewardItem from './reward_item';
import { createPledge } from '../../actions/reward_actions';

const mapStateToProps = ( { session, project} ) => {
  return {
    session,
    project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPledge: (project) => dispatch(createPledge(project))
    };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardItem);
