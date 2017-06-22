import { connect } from 'react-redux';
import PreliminaryProjectForm from './prelim_project_form';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreliminaryProjectForm);
