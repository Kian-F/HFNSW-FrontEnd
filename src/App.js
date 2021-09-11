import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignInSide from './components/SignIn/SignInSide';
import Profile from './Views/Profile';

// import { NavBar, Footer, Loading } from "./components";
// import { Home, Profile, ExternalApi } from "./views";

// import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div id="app" className="d-flex flex-column h-100">
      {/* <NavBar /> */}
      <div className="container flex-grow-1">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/SignIn" component={SignIn}/>
          <Route exact path="/SignInSide" component={SignInSide}/>
          <Route exact path="/Profile" component={Profile}/>
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;