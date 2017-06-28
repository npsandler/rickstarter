import React from 'react';
// import { selectCategory } from '../../reducers/selectors';
import ProjectIndexItem from '../projects/project_index_item';
import { withRouter } from 'react-router-dom';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.projects = null;
  }

  componentDidMount() {
    debugger
    this.projects = this.props.requestCategory(this.props.match.url.slice(9));
  }

  componentWillReceiveProps(nextProps){
    debugger
    if(this.props.location.pathname.slice(9) !== nextProps.match.url.slice(9)) {
      debugger
      this.props.requestCategory(nextProps.match.url.slice(9));
    }
  }

  render() {
    if (this.projects) {
      const projects = Object.keys(this.props.projects).map( key => this.props.projects[key]);

      return (
        <ul className="category-list">
          { projects.map(project => <ProjectIndexItem key={project.id} project={project} />)}
        </ul>
      )
    } else {
      return(
        null
      );
    }
  }

}

export default withRouter(CategoryIndex);
