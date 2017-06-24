import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import Slider from 'react-slick';

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
            	<Slider>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <div className='abc carousel-slide'>hello from carousel slide 1</div>
                <div className='bcd carousel-slide'>hello from carousel slide 2</div>
                <div className='def carousel-slide'>hello from carousel slide 3</div>
                <div className='efg carousel-slide'>hello from carousel slide 4</div>
              </Slider>
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
