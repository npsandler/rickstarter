import { connect } from 'react-redux';
import ProjectIndex from './project_index';

import { requestAllProjects  } from '../../actions/project_actions';

const mapStateToProps = ({ projects }) => {
  return {
    projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllProjects: () => dispatch(requestAllProjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
