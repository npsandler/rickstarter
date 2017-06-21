import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/session_actions'

const loggedOutLinks = () => (
  <nav  className='right-nav'>
    <ul>
      <li>
        <Link to='/' className='search-button nav-item'>
          <i className="fa fa-search nav-item nav-icon"></i>
        </Link>
      </li>
      <li>
        <Link to="/login" className="header-link nav-item" >Login</Link>
      </li>
      <li>
        <Link to="/signup" className="header-link nav-item" >Sign up</Link>
      </li>
    </ul>

  </nav>
);

const loggedInLinks = (currentUser, logOut) => (
  <nav  className='right-nav'>
    <ul>
      <li>
        <Link to='/' className='search-button nav-item'>
          <i className="fa fa-search nav-icon"></i>
          </Link>
      </li>
      <li>
        <div className="header-link user-icon" onClick={logOut}>
          <img src={currentUser.image_url} />
        </div>
      </li>
    </ul>

  </nav>
);

const RightNav = ({ currentUser, logOut }) => (
  currentUser ? loggedInLinks(currentUser, logOut) : loggedOutLinks()
);

export default RightNav;
