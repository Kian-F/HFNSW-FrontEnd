import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import SignInSide from './components/SignIn/SignInSide'
import Users from './components/Users/users'
import Profile from './Views/Profile'
import Account from './components/account'

const Routes = () => (
  <Router basename="">
    <Route exact path="/" component={Home} />
    <Route exact path="/signInSide" component={SignInSide} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/account" component={Account} />
    <Route exact path="/users" component={Users} />
  </Router>
)

export default Routes
