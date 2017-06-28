import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ToggleBar extends React.Component{

  render() {

    return (
      <section className='toggle-bar'>
        <NavLink exact to='/fullform/basics' activeClassName='visiting' >Basics</NavLink>
        <NavLink exact to='/fullform/rewards' activeClassName='visiting' >Rewards</NavLink>
      </section>
    )
  }




}
