import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import Slider from 'react-slick';

class ProjectIndex extends React.Component {


componentDidMount() {
   this.props.requestAllProjects();
 }

 componentWillReceiveProps(nextProps) {
   if (this.props.match.url !== nextProps.match.url) {
      this.props.requestAllProjects();
   }
 }



 render() {

   const sliderSettings = {
     infinite: true,
     speed: 2000,
     arrows: true,
     dots: true,
     buttons: true,
     slidesToShow: 1,
     autoplay: true,
     draggable: false,
     fade: true,
     autoplaySpeed: 5000,
   };

   const projects = Object.keys(this.props.projects).map( key => this.props.projects[key]);
   if (projects.length > 4) {
     return (
       <section className='home-page-background'>
         <section className='home-page'>
           <section className='carousel'>
             <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
             <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
            	<Slider {...sliderSettings}>
                <section className='carousel-slide'>
                  <img className="carousel-image" src={projects[0].image}/>
                  <text className="carousel-overlay"> {projects[0].title}</text>
                </section>
                <section className='carousel-slide'>
                  <img className="carousel-image" src={projects[2].image}/>
                  <text className="carousel-overlay"> {projects[2].title}</text>
                </section>
                <section className='carousel-slide'>
                  <img className="carousel-image" src={projects[5].image}/>
                  <text className="carousel-overlay"> {projects[5].title}</text>
                </section>
                <section className='carousel-slide'>
                  <img className="carousel-image" src={projects[4].image}/>
                  <text className="carousel-overlay"> {projects[4].title}</text>
                </section>

               </Slider>
           </section>
           <section className="project-index-container">
             <h1 className='index-header'>Recent projects</h1>

             <ul className='project-index'>
               { projects.map(project => (
                 <div className='index-item-spacer' key={project.id} >
                   <ProjectIndexItem  project={project} key={project.id} />
                 </div>
               ))}
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
