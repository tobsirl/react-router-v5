/*
  Utilizing React Router v5's `Prompt` component,
  prompt the user if they try to navigate away from the
  `/survey` route if their form is "dirty".
*/

import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;

function Survey() {
  const [food, setFood] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const handleChange = (e) => {
    const food = e.target.value;

    setFood(food);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What is your favorite food?
        <input
          type="text"
          placeholder="Favorite Food"
          onChange={handleChange}
          value={food}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/survey">Survey</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>

        <hr />

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/survey">
          <Survey />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </div>
    </Router>
  );
}
