import { connect } from 'react-redux';
import FullProjectForm from './full_project_form';

const mapStateToProps = ({errors, incompleteForm}) => ({
  errors,
  incompleteForm
});

const mapDispatchToProps = dispatch => ({
  receiveSingleProject: () => dispatch(receiveSingleProject())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullProjectForm);
