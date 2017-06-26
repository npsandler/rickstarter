
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Line } from 'rc-progress';

import RewardItem from '../rewards/reward_item';

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
      const percentFunded = Math.ceil((project.current_funding / project.funding_goal) * 100);
      return   (
        <article className='show-background'>
          <section className='content-box'>
            <section className='header content-subsection'>
              <section className='creator-area'>
                <div className='creator-img'> prof-pic</div>
                <div className='creator-name'>{project.creator.name}</div>
              </section>
              <section className='headline'>
                <div className='title'>{project.title}</div>
                <div className='description'>{project.description}</div>
              </section>
            </section>

            <section className='content-subsection'>
              <section className='project-image'>
                <div className='image'> IMG HERE</div>
              </section>
              <ul className='project-stats'>
                <li className='funding-bar'>
                  <Line percent={percentFunded} trailWidth="3" strokeColor="#D3D3D3" />
                </li>
                <li className='current-funding-text green'>${project.current_funding}</li>
                <li className='funding-goal-text'>pledged of a ${project.funding_goal} goal</li>
                <li className='stat'></li>
                <li className='stat-line'>backers</li>
                <li className='stat'>{this.dateRemaining()}</li>
                <li className='stat-line'>days to go</li>
                <li>
                  <button className='backer-button shadowed-green'>Back this project</button>
                </li>
                <li>
                  <text className='footer'>All or nothing. This project will only be funded if it reaches its goal by {project.end_date}}</text>
                </li>
              </ul>
            </section>

            <section className='lower content-subsection'>
              <section className='details-box'>
                <div className='details'>{project.details}</div>
              </section>
              <section className='rewards-bar'>
                <h1>Support this project</h1>
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
