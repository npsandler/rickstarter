import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {


componentDidMount() {
   this.props.requestAllProjects();
 }


 render() {
   const projects = Object.keys(this.props.projects).map( key => this.props.projects[key]);
   if (projects.length > 0) {
     return (
       <section className='home-page-background'>
         <section className='home-page'>
           <section className='carousel'>
           </section>
           <section className="project-index-container">
             <ul className='project-index'>
               { projects.map(project => <ProjectIndexItem key={project.id} project={project} />)}
             </ul>
           </section>
         </section>
        </section>
      );
    } else {
      return null;
    }
 }

}



export default ProjectIndex;
