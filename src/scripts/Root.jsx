import React, { Component } from 'React';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './containers/Home.jsx';
import Typography from './containers/Typography.jsx';

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/typography' component={ Typography } />
        </Switch>
      </div>
    </Router>
  )
};

export default Root;
