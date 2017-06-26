import React from 'react';
import { connect } from 'react-redux';
import RewardItem from './project_index_item';


const mapStateToProps = ({ project }) => {
  return {
    project
  };
};

const mapDispatchToProps = dispatch => {
  return {

    };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardItem);
