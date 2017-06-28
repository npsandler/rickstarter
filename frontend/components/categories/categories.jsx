import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import CategoryIndex from './category_index';

export default class Categories extends React.Component {

  render(){
    const categories = ["Art", "Comments", "Crafts", "Dance", "Design",
    "Fashion", "Film & Video", "Food", "Games", "Journalism", "Music",
    "Photography", "Publishing", "Technology", "Theatre"];

    let categoryToggles = [];
    let categoryRoutes = [];

    categories.forEach ( (category) => {
      categoryRoutes.push(<li><Route path={`/explore/${category}`} category={category} component={CategoryIndex} /></li>);
      categoryToggles.push(<NavLink exact to={`/explore/${category}`} activeClassName='visiting' >{category} </NavLink>);
    });
    debugger
    return(
        <section className='explore'>
          <ul className='category-toggles'>
            {categoryToggles}
          </ul>
          <section className='category-render'>
            {categoryRoutes}
          </section>
        </section>
    );
  }

}
