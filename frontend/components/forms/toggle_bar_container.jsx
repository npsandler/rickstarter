
import { connect } from 'react-redux';
import { receiveIncompleteForm } from '../../actions/incomplete_form_actions';
import ToggleBar from './toggle_bar';

const mapStateToProps = ({errors, incompleteForm}) => ({
  errors,
  incompleteForm
});

const mapDispatchToProps = dispatch => ({
  receiveIncompleteForm: (project, rewards) => dispatch(receiveIncompleteForm(project, rewards))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleBar);
