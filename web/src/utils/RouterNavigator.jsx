import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../redux/store';

import '../styles/utils.css';

import Components from '../pages/Components';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Main from '../pages/index';
import Chat from '../pages/Chat';
import ScenarioSelection from '../pages/ScenarioSelection';
import ViewPresentation from '../pages/ViewPresentation';


function RouterNavigator() {
  const user = JSON.parse(localStorage.getItem('userAuthorizationToken'));

  return (
    <Router history={history}>
      <Switch>
        { user && user.token? (
          <>
            {/* <Redirect to="/" /> */}
            <Route path="/" exact><Main /></Route>
            <Route path="/constructor" exact><ScenarioSelection /></Route>
            <Route path="/constructor/:scenarioId" exact><Chat /></Route>
            <Route path="/components" exact><Components /></Route>
            <Route path="/slides" exact><ViewPresentation /></Route>
          </>
        ):(
          <>
            {/* <Redirect to="/login" /> */}
            <Route path="/login" exact><Login /></Route>
            <Route path="/registration" exact><Registration /></Route>
          </>
        )}
        <Route><p>404 not found</p></Route>
      </Switch>
    </Router>
  );
}

export default RouterNavigator;
