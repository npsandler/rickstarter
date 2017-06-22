import { connect } from 'react-redux';
import PreliminaryProjectForm from './prelim_project_form';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreliminaryProjectForm);
