
import { connect } from 'react-redux';
import { requestCategory } from '../../actions/project_actions';
import CategoryIndex from './category_index';

const mapStateToProps = ( {projects} ) => ({
  projects
});

const mapDispatchToProps = dispatch => ({
  requestCategory: (category) => dispatch(requestCategory(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);
