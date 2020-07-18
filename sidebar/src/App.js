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

// routes array here

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => (
      <span role="img" aria-label="Home">
        🏠🏠🏠🏠🏠
      </span>
    ),
    main: () => (
      <span role="img" aria-label="Home">
        🏠🏠🏠🏠🏠
      </span>
    ),
  },
  {
    path: '/rainbows',
    sidebar: () => (
      <span role="img" aria-label="Home">
        🌈🌈🌈🌈🌈
      </span>
    ),
    main: () => (
      <span role="img" aria-label="Home">
        🌈🌈🌈🌈🌈
      </span>
    ),
  },
  {
    path: '/bears',
    sidebar: () => (
      <span role="img" aria-label="Home">
        🐻🐻🐻🐻🐻
      </span>
    ),
    main: () => (
      <span role="img" aria-label="Home">
        🐻🐻🐻🐻🐻
      </span>
    ),
  },
];

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div className="sidebar">
          {/* navbar here */}

          {/* sidebar routes here */}
        </div>

        <div>{/* body  routes here */}</div>
      </div>
    </Router>
  );
}
