
import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import { createReward } from '../../actions/reward_actions';
import FullForm from './full_project_form';

const mapStateToProps = ({errors, incompleteForm}) => ({
  errors,
  incompleteForm
});

const mapDispatchToProps = dispatch => ({
  createProject: (project) => dispatch(createProject(project)),
  createReward: (reward) => dispatch(createReward(reward))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullForm);
