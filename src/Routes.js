import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignInSide from './components/SignIn/SignInSide';

const Routes = (
  <Router basename="">
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/SignIn" component={SignIn}/>
      <Route exact path="/SignInSide" component={SignInSide}/>
    </div>
  </Router>
);

export default Routes;