
import { connect } from 'react-redux';
import FullProjectForm from './full_project_form';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullProjectForm);
