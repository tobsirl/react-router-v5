import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'

import Home from './components/Home'

export default function App() {
  return (
    <Router>
    <div className="fill">
    <Route exact path="/">
      <Redirect to={Home} />
    </Route>

    <ul className="nav">
    <Link to="/super-centered">Super Centered</Link>

    </ul>
      
    </div>

    </Router>
  )
}

