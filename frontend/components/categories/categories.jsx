import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default class Categories extends React.Component {

  render(){
    const categories = ["Art", "Comments", "Crafts", "Dance", "Design",
    "Fashion", "Film & Video", "Food", "Games", "Journalism", "Music",
    "Photography", "Publishing", "Technology", "Theatre"];

    let categoryToggles = [];
    let categoryRoutes = [];

    categories.forEach ( (category) => {
      categoryToggles.push(<li><NavLink exact to="/explore/{category}" activeClassName='visiting' >{category} </NavLink></li>);
      categoryRoutes.push(<li><Route path="/explore/{category}" category={category} component={ProjectForm} /></li>);
    };

    return(
        <section className='explore'>
          <ul className='categoryToggles'>
            {categoryToggles}
          </ul>
          <ul className='categories-render'>
            {categoryRoutes}
          </ul>
        </section>
    );
  }

}
