
import React from 'react';

import SessionFormContainer from './session_form/session_form_container';
import LeftNavContainer from './nav_bar/left_nav_container';
import RightNavContainer from './nav_bar/right_nav_container';
import PrelimFormContainer from './projects/prelim_container';
import FullFormContainer from './projects/full_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <section className='nav-bar'>
      <LeftNavContainer className='left_nav'/>
      <Link to="/" className="logo" >
        <img src={window.images.logo} className='logo-image' />
      </Link>
      <RightNavContainer className='right-nav'/>
    </section>

    <Switch>
      <Route path="newproject" component={PrelimFormContainer} />
      <ProtectedRoute path='fullform'component={FullFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
