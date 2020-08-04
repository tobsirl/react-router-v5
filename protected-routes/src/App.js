/*
  1. Create a `PrivateRoute` component that redirects to
    the /login route if the user isn't authenticated (using 
    fakeAuth.isAuthenticated).

  2. Make /notifications a private route.

  3. Finish implementing `AuthButton` to allow the user
      to logout (using fakeAuth.signout).
*/

import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

const Home = () => <h3>Home</h3>;
const Notifications = () => <h3>Notifications</h3>;

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const { state } = useLocation();

  const login = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || '/'} />;
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function AuthButton() {
  return <div />;
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
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>

        <AuthButton />

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/notifications">
          <Notifications />
        </PrivateRoute>
      </div>
    </Router>
  );
}
