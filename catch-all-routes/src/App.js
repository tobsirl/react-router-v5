/*
  You're given three components, `Home`, `Settings`, and
  `FourZeroFour`.

  1. Create a navbar to navigate between `/` 
    and `/settings`.

  2. Render your `Route`s according to the table below

    URL    Component
    `/` -> `Home`
    `/settings` -> `Settings`
    anything else -> `FourZeroFour`
 */

import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;
const FourZeroFour = () => <h1>404</h1>;

export default function App() {
  return (
    <Router>
      <div>
        {/* Nav here */}

        {/* Routes here */}
      </div>
    </Router>
  );
}
