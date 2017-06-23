import ShowPage from './show_page';
import { connect } from 'react-redux';

const mapStateToProps = ({ project }, ownProps) => {
  return {
    project: projects[ownProps.match.params.id],
  }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
