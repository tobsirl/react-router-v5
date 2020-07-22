import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';

export default function App() {
  return (
    <Router>
      <div className="large-header">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
        Hash History Basketball League
      </div>
    </Router>
  );
}
