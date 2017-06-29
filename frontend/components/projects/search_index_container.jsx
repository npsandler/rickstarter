
import { connect } from 'react-redux';
import { requestSearch } from '../../actions/project_actions';
import SearchIndex from './search_index';

const mapStateToProps = ( {projects} ) => ({
  projects
});

const mapDispatchToProps = dispatch => ({
  requestSearch: (search) => dispatch(requestSearch(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
