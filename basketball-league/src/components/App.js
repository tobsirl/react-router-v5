import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './Loading';

import Navbar from './Navbar';
const Home = React.lazy(() => import('./Home'));
const Players = React.lazy(() => import('./Players'));
const Teams = React.lazy(() => import('./Teams'));
const TeamPage = React.lazy(() => import('./TeamPage'));
const FourOhFour = React.lazy(() => import('./FourOhFour'));
const Articles = React.lazy(() => import('./Articles'));

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/players">
              <Players />
            </Route>
            <Route path="/teams">
              <Teams />
            </Route>
            <Route exact path="/:teamId">
              <TeamPage />
            </Route>
            <Route path="/:teamId/articles">
              <Articles />
            </Route>
            <Route path="*">
              <FourOhFour />
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}
