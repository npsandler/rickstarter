import React from 'react';
import ProjectIndexItem from '../projects/project_index_item';
import { withRouter } from 'react-router-dom';


class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.projects = null;
  }

  componentDidMount() {
    debugger
    this.projects = this.props.requestSearch(this.props.match.url.slice(8));
  }

  componentWillReceiveProps(nextProps){
    debugger
    if(this.props.location.pathname.slice(8) !== nextProps.match.url.slice(8)) {
      this.props.requestSearch(nextProps.match.url.slice(8));
    }
  }

  render() {
    if (this.projects) {
      const projects = Object.keys(this.props.projects).map( key => this.props.projects[key]);

      return (
        <ul className="search-results">
          { projects.map(project => <li className="category-item"><ProjectIndexItem key={project.id} project={project} /></li>)}
        </ul>
      )
    } else {
      return(
        null
      );
    }
  }

}

export default withRouter(SearchIndex);
