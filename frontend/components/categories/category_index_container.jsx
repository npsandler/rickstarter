
import { connect } from 'react-redux';
import { selectCategory } from '../../reducers/selectors';
import CategoryIndex from './category_index';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch(selectCategory(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);
