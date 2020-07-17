/*
  The App component has a `friends` array on its state. You need to do
  two things - refactor the `Link` to pass the array through to the `Friends`
  component then use it inside of that component.
*/

import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

const Friends = () => {
  const friends = [];
  return (
    <React.Fragment>
      <h1>Friends</h1>
      <ul>
        {friends.map(({ name, handle, avatar }) => (
          <li key={name} className="user">
            <img alt={`Avatar for ${name}`} src={avatar} />
            <a href={`https://twitter.com/${handle}`}>{name}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const Home = () => <h1>Home</h1>;

export default function App() {
  const [friends] = React.useState([
    {
      name: 'Tyler McGinnis',
      handle: 'tylermcginnis',
      avatar:
        'https://pbs.twimg.com/profile_images/1138547910524588034/4R6jdBch_400x400.png',
    },
    {
      name: 'Sarah Drasner',
      handle: 'sarah_edo',
      avatar:
        'https://pbs.twimg.com/profile_images/1225613270205091840/NyoNYuhC_400x400.jpg',
    },
    {
      name: 'Dan Abramov',
      handle: 'dan_abramov',
      avatar:
        'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
  ]);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
      </div>
    </Router>
  );
}
