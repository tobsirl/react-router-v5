/*
  1. You're given three components, App, Results and Form. Inside the 
  App component, creates two Routes. One that will render the Form component
  when the user is at '/' and the other which will render the Results component
  when the user is at '/results.

  2. Refactor the Form component so that when the user submits the form, 
    you redirect them (declaratively using <Redirect />) to the /results page.
*/

import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

const submit = () => {
  // fake AF
  return new Promise((res) => {
    setTimeout(() => res(<Redirect to="/results" />), 500);
  });
};

function Results() {
  return <h1>{`Mmmm. Thanks for submitting your favorite food.`}</h1>;
}

function Form() {
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [toResults, setToResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === 'name' ? setName(value) : setFood(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(name, food).then(setToResults(true));
  };

  if (toResults) {
    return <Redirect to="/results" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your name
        <input type="text" value={name} onChange={handleChange} name="name" />
      </label>
      <label>
        Favorite Food
        <input type="text" value={food} onChange={handleChange} name="food" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Router>
    </div>
  );
}
