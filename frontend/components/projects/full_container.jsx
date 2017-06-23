import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import FullProjectForm from './full_project_form';

const mapStateToProps = ({errors, incompleteForm}) => ({
  errors,
  incompleteForm
});

const mapDispatchToProps = dispatch => ({
  createProject: (project) => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullProjectForm);
