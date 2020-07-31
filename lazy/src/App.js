/*
  Refactor the Home, Newsletters, and Dashboard
  components to be loaded lazily via React.lazy.
*/

import * as React from 'react';
import Loading from './Loading';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Newsletters from './Newsletters';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newsletters">Newsletters</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/newsletters">
          <Newsletters />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </div>
    </Router>
  );
}
