import { connect } from 'react-redux';
import { receiveIncompleteForm } from'../../actions/incomplete_form_actions';
import PreliminaryProjectForm from './prelim_project_form';

const mapStateToProps = ({errors}) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  receiveIncompleteForm: (project) => dispatch(receiveIncompleteForm(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreliminaryProjectForm);
