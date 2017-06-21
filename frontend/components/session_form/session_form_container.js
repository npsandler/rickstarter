import { connect } from 'react-redux';

import { logIn, logOut, signUp } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signup') ? signUp : logIn;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    logIn: user => dispatch(logIn(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
