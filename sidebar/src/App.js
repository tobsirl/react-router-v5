/*
  1. Create a `routes` array that has three routes.
      / which renders 🏠 in the sidebar and "Home" in the body
      /rainbows which renders 🌈 in the sidebar and "Rainbows" in the body
      /bears which renders 🐻 in the sidebar and "Bears" in the body

  2. Create a navbar which navigates between your three routes

  3. Utilize your `routes` array to render the proper
    `Route`s both in the sidebar and in the body.
*/

import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { routes } from './utils/routes';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div className="sidebar">
          {/* navbar here */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rainbows">Rainbows</Link>
            </li>
            <li>
              <Link to="/bears">Bears</Link>
            </li>
          </ul>

          {/* sidebar routes here */}
          {routes.map((route) => (
            <Route path={route.path} exact={route.path} sidebar={route.sidebar}>
              <route.sidebar />
            </Route>
          ))}
        </div>

        <div>
          {routes.map((route) => (
            <Route path={route.path} exact={route.path} main={route.main}>
              <route.main />
            </Route>
          ))}
        </div>
      </div>
    </Router>
  );
}
