iimport React from 'react';
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
    let percentFunded = Math.ceil((project.current_funding / project.funding_goal) * 100);
    if (percentFunded > 100 ) {
      percentFunded = 100;
    } else if (!percentFunded) {
      percentFunded = 0
    }
    return (
      <li className="project-index-item">
        <Link className='preview-wrapper' to={`/projects/${project.id}`}>
          <section className='text-wrapper'>
          <img className='preview-image' src={project.image} />
            <div className='text-element'> { project.category } </div>

            <div className='text-element'>
              <text className='heavy'>
                { project.title }:
              </text>
                <br/>
              <text className='light wrap'>
                { project.description }
              </text>
            </div>

            <section className='creator'>
              <img className="thumb text-element" src={project.creator.image}/>
              <text className='creator-name'>{project.creator.name}</text>
            </section>
            <div className='preview-funding-bar'>
              <Line percent={percentFunded} trailWidth="3" strokeColor="#25CB68" />
            </div>
            <div className='preview-stat text-element'>
              <div className='heavy'>${project.current_funding}</div>
              <div className='light'> pledged</div>
            </div>
            <div className='preview-stat text-element'>
              <div className='heavy'>{percentFunded}%</div>
              <div className='light'> funded</div>
            </div>
            <div className='preview-stat text-element'>
              <div className='heavy'>{this.dateRemaining()}</div>
              <div className='light'> days to do </div>
            </div>
          </section>
        </Link>



      </li>
    );
  }
}


export default ProjectIndexItem;
