import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import CategoryIndex from './category_index_container';

export default class Categories extends React.Component {

  render(){
    const categories = ["Art", "Comics", "Crafts", "Dance", "Design",
    "Fashion", "Film & Video", "Food", "Games", "Journalism", "Music",
    "Photography", "Publishing", "Technology", "Theatre"];

    let categoryToggles = [];

    categories.forEach ( (category, i) => {
      categoryToggles.push(<NavLink exact to={`/explore/${category}`} key={i} activeClassName='visiting' >{category} </NavLink>);
    });
    return(
        <section className='explore'>
          <ul className='category-toggles'>
            <label className='category-green'>Categories</label>
            {categoryToggles}
          </ul>
          <section className='category-render'>
            <Route path={`/explore/:categoryName`} component={CategoryIndex} />
          </section>
        </section>
    );
  }

}
