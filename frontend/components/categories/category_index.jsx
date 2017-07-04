import React from 'react';
import ProjectIndexItem from '../projects/project_index_item';
import { withRouter, Link } from 'react-router-dom';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCategory(this.props.match.url.slice(9));
  }

  componentWillReceiveProps(nextProps){
    if(this.props.location.pathname.slice(9) !== nextProps.match.url.slice(9)) {
      this.props.requestCategory(nextProps.match.url.slice(9));
    }
  }


  render() {
    if (this.props.projects) {
      const projects = Object.keys(this.props.projects).map( key => this.props.projects[key]);
      debugger
      if (projects.length){
        const mappedProjects = projects.map((project) => {
          return (
            <li className="category-item">
                <ProjectIndexItem key={project.id} project={project} />
            </li>
          );
        });
        debugger
        return (
          <ul className="category-list">
            {mappedProjects}
          </ul>
        )
      } else {
        debugger
        return (
          <section className="no-proj">
            <h2>There are currently no projects under this category</h2>
            <Link to="/newproject" className='new-proj-redirect'>Create one</Link>
          </section>
        )
      }
    }

    debugger
    return(
      null
    );
  }


}

export default withRouter(CategoryIndex);
