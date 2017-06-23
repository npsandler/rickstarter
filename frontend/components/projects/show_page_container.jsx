import ShowPage from './show_page';
import { connect } from 'react-redux';
import { requestSingleProject } from '../../actions/project_actions';

const mapStateToProps = ({ projects }, ownProps) => {
  return {
    project: projects[ownProps.match.params.projectId],
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleProject: (projectId) => dispatch(requestSingleProject(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
