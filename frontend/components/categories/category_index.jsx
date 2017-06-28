import React from 'react';
// import { selectCategory } from '../../reducers/selectors';
import ProjectIndexItem from '../projects/project_index_item';
import { withRouter } from 'react-router-dom';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.cat = this.props.match.url.slice(9);
    this.projects = null;
  }

  componentDidMount() {
    this.projects = this.props.requestCategory(this.cat);
  }

  componentWillReceiveProps(nextProps){
    debugger
    if(this.cat !== nextProps.match.url.slice(9)){
      this.projects = this.props.requestCategory(this.cat);
    }
  }

  render() {
    if (this.projects) {
      const projects = Object.keys(this.props.projects).map( key => this.props.projects[key]);

      return (
        <ul>
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
