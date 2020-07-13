/*
  Inside the User component you need to parse the query string from the 
  URL and then show the information about the selected user (which you can 
    get from the `users` object).

  If no user is selected, show "Select a user".
*/

import * as React from 'react';
import './styles.css';
import { parse } from 'query-string';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation,
} from 'react-router-dom';

const users = {
  tylermcginnis: {
    name: 'Tyler McGinnis',
    handle: 'tylermcginnis',
    avatar:
      'https://pbs.twimg.com/profile_images/1138547910524588034/4R6jdBch_400x400.png',
  },
  sarah_edo: {
    name: 'Sarah Drasner',
    handle: 'sarah_edo',
    avatar:
      'https://pbs.twimg.com/profile_images/1225613270205091840/NyoNYuhC_400x400.jpg',
  },
  dan_abramov: {
    name: 'Dan Abramov',
    handle: 'dan_abramov',
    avatar:
      'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
  },
};

function User() {
  const { search } = useLocation();
  const { id } = parse(search);

  if (!id) {
    return <p>Select a user</p>;
  }

  const { name, handle, avatar } = users[id];
  return (
    <div className="user">
      <img src={avatar} alt={`Avatar for ${name}`} />
      <a href={`https://www.twitter.com/${handle}`}>{name}</a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <h1>Users</h1>
        <ul>
          <li>
            <Link to="/?id=tylermcginnis">Tyler</Link>
          </li>
          <li>
            <Link to="/?id=sarah_edo">Sarah</Link>
          </li>
          <li>
            <Link to="/?id=dan_abramov">Dan</Link>
          </li>
        </ul>

        <hr />

        <Route path="/">
          <User />
        </Route>
      </div>
    </Router>
  );
}
