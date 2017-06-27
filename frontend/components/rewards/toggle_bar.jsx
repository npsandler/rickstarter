import React from 'react';
import NavLink from '../../util/nav_link';

export default class ToggleBar extends React.Component{

  toggleToProject(e) {
    e.preventDefault();
    this.props.receiveIncompleteForm(this.state);
    this.props.history.push('/fullform');
  }

  toggleToProject(e) {
    e.preventDefault();
    this.props.receiveIncompleteForm(this.state);
    this.props.history.push('/rewardform');
  }


  render() {
    return (
      <section className='toggleBar'>
        <NavLink onClick={this.toggleToProject}>Basics</NavLink>
        <NavLink onClick={this.toggleToRewards}>Rewards</NavLink>
      </section>
    )
  }




}
