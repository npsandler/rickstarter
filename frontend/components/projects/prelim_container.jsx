import { connect } from 'react-redux';
import PreliminaryProjectForm from './post_form';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreliminaryProjectForm);
