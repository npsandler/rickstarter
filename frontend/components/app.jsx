import React from 'react';

import SessionForm from './session_form/session_form_container';
import LeftNav from './nav_bar/left_nav_container';
import RightNav from './nav_bar/right_nav_container';
import PrelimForm from './forms/prelim_container';
import ProjectShow from './projects/show_page_container';
import ProjectIndex from './projects/project_index_container';
import FullForm from './forms/full_form_container';
import RewardForm from './forms/reward_form_container';
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
      <LeftNav className='left_nav'/>
      <Link to="/" className="logo" >
        <img src={window.images.logo} className='logo-image' />
      </Link>
      <RightNav className='right-nav'/>
    </section>

    <Switch>
      <Route exact path='/' component={ProjectIndex} />
      <Route path='/projects/:projectId' component={ProjectShow} />
      <Route path="/newproject" component={PrelimForm} />
      <ProtectedRoute path='/fullform' component={FullForm} />
      <AuthRoute path="/login" component={SessionForm} />
      <AuthRoute path="/signup" component={SessionForm} />
      <Route path='/rewardform' component={RewardForm} />
    </Switch>
  </div>
);

export default App;
