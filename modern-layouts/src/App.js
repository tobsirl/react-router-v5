import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './components/Home';
import SuperCentered from './components/SuperCentered';
import DeconstructedPancake from './components/DeconstructedPancake';
import Sidebar from './components/Sidebar';
import Pancake from './components/Pancake';
import HolyGrail from './components/HolyGrail';
import Span from './components/Span';
import RAM from './components/RAM';
import Lineup from './components/Lineup';
import Clamp from './components/Clamp';
import Aspect from './components/Aspect';

export default function App() {
  return (
    <Router>
      <div className="fill">
        <ul className="nav">
          <Link to="/super-centered">Super Centered</Link>
          <Link to="/deconstruted-pancake">Deconstructed Pancake</Link>
          <Link to="/sidebar">Sidebar Says</Link>
          <Link to="/pancake">Pancake Stack</Link>
          <Link to="/holygrail">Holy Grail</Link>
          <Link to="/span">12-Span Grid</Link>
          <Link to="/RAM">RAM</Link>
          <Link to="/lineup">Line Up</Link>
          <Link to="/clamp">Clamping My Style</Link>
          <Link to="/aspect">Respect for Aspect</Link>
        </ul>

        <TransitionGroup>
          <CSSTransition timeout={250} className="fade">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/super-centered">
                <SuperCentered />
              </Route>
              <Route path="/deconstruted-pancake">
                <DeconstructedPancake />
              </Route>
              <Route path="/sidebar">
                <Sidebar />
              </Route>
              <Route path="/pancake">
                <Pancake />
              </Route>
              <Route path="/holygrail">
                <HolyGrail />
              </Route>
              <Route path="/span">
                <Span />
              </Route>
              <Route path="/ram">
                <RAM />
              </Route>
              <Route path="/lineup">
                <Lineup />
              </Route>
              <Route path="/clamp">
                <Clamp />
              </Route>
              <Route path="/aspect">
                <Aspect />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Router>
  );
}
