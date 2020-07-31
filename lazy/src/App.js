/*
  Refactor the Home, Newsletters, and Dashboard
  components to be loaded lazily via React.lazy.
*/

import React, { lazy, Suspense } from 'react';
import Loading from './Loading';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Dashboard'));
const Newsletters = lazy(() => import('./Newsletters'));

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
        <Suspense fallback={Loading}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newsletters">
            <Newsletters />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Suspense>
      </div>
    </Router>
  );
}
