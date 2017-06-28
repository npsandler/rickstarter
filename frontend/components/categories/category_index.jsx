import React from 'react';
// import { selectCategory } from '../../reducers/selectors';
import ProjectIndexItem from '../projects/project_index_item';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.cat = this.props.match.path.slice(9);
    this.projects = null;
  }

  componentDidMount() {
    debugger
    this.projects = this.props.requestCategory(this.cat);
  }

  render() {
    if (this.projects) {
      debugger
      projects = this.projects.map( (project) => (<li><ProjectIndexItem key={project.id} project={project} /></li>));

      return (
        <ul>
          {projects}
        </ul>
      )
    } else {
      return(
        null
      );
    }
  }

}
