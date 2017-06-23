import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.dateRemaining = this.dateRemaining.bind(this);
  }


  numberWithCommas(x) {
    return(
     x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
     );
   }

   dateRemaining() {
     const currentDate = new Date();
     return this.numberWithCommas(
       Math.ceil((new Date(this.props.project.end_date) - currentDate) / 86400000)
     );
   }

  render() {
    const { project } = this.props;
    debugger
    const percentFunded = (project.current_funding / project.funding_goal) * 100;
    return (
      <li className="project-index-item">
        <Link to={`/projects/${project.id}`}>
          <div>image</div>
          <div> { project.category } </div>
          <div> { project.title } </div>
          <div> { project.description } </div>
          <section className='creator'>
            <div className='preview-pic'> creatorpic </div>
            <div> creatorname </div>
          </section>
          <div className='preview-funding-bar'>
            <Line percent={percentFunded} trailWidth="3" strokeColor="#D3D3D3" />
          </div>
          <div className='preview-stat'>
            <text>US$</text>
            <div>${project.current_funding}</div>
            <div> pledged</div>
          </div>
          <div className='preview-stat'>
            <div>{percentFunded}%</div>
            <div> funded</div>
          </div>
          <div className='preview-stat'>
            <div>{this.dateRemaining()}</div>
            <div> days remaining </div>
          </div>



          <div className='funding-goal-text'>pledged of a ${project.funding_goal} goal</div>





        </Link>



      </li>
    );
  }
}


export default ProjectIndexItem;
