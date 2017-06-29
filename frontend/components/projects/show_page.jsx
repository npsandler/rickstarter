
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Line } from 'rc-progress';

import RewardItem from '../rewards/reward_item_container';

class ShowPage extends React.Component {
  constructor(props) {
    super(props);


    this.dateRemaining = this.dateRemaining.bind(this);
  }

  componentDidMount() {
    if (this.props.project === undefined) {
      this.props.requestSingleProject(this.props.match.params.projectId);
    }
  }

  componentWillReceiveProps(nextProps) {
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
    // TODO: renderuserimage properly
    // TODO: days to do, backers
    const { project } = this.props;
    if (project) {
      let percentFunded = Math.ceil((project.current_funding / project.funding_goal) * 100);
      if (percentFunded > 100 ) {
        percentFunded = 100;
      } else if (!percentFunded) {
        percentFunded = 0
      }
      return   (
        <article className='show-background'>
          <section className='content-box'>
            <section className='header content-subsection'>
              <section className='creator-area'>
                <img className="creator-img" src={project.creator.image}/>
                <div className='creator-name'>{project.creator.name}</div>
              </section>
              <section className='headline'>
                <div className='title'>{project.title}</div>
                <div className='description'>{project.description}</div>
              </section>
            </section>

            <section className='main-content content-subsection'>
              <section className='project-image'>
                <img className='image' src={project.image}/>
              </section>
              <ul className='project-stats'>
                <li className='funding-bar'>
                  <Line percent={percentFunded} trailWidth="3" strokeColor="#25CB68"
                     />
                </li>
                <li className='current-funding-text green stat'>${project.current_funding}</li>
                <li className='stat-line'>pledged of a ${project.funding_goal} goal</li>
                <li className='stat'>{project.backers.length}</li>
                <li className='stat-line'>backers</li>
                <li className='stat'>{this.dateRemaining()}</li>
                <li className='stat-line'>days to go</li>
                <li>
                  <button className='backer-button shadowed-green'>Back this project</button>
                </li>
                <p>
                  <text className='footer'>All or nothing. This project will only be funded if it reaches its goal by {project.end_date}</text>
                </p>
              </ul>
            </section>

            <section className='lower content-subsection'>
              <section className='move-left details-box'>
                <h2>About this project</h2>
                <p className='details'>{project.details}</p>
              </section>
              <section className='rewards-bar'>
                <h2 className="move-left">Support this project</h2>
                { project.rewards.map(reward => <RewardItem key={reward.id} reward={reward} />) }
              </section>
            </section>
          </section>
        </article>
      );
    } else {
      // loading spinner?
      return null
    }
  }
}

export default withRouter(ShowPage);
