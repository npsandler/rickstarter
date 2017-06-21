import { connect } from 'react-redux';

import { logOut } from '../../actions/session_actions';
import RightNav from './right_nav';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightNav);
