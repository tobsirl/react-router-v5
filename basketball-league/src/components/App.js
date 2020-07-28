import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import TeamPage from './TeamPage';
import FourOhFour from './FourOhFour';
import Articles from './Articles';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route exact path="/:teamId">
            <TeamPage />
          </Route>
          <Route path="/:teamId/articles">
            <Articles />
          </Route>
          <Route path="*">
            <FourOhFour />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
