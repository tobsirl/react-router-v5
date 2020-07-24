import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slug from 'slug';
import usePlayers from '../hooks/usePlayers';

function Sidebar() {
  const {loading, } = usePlayers()
  console.log(usePlayers);
  return <div>Side</div>;
}

export default Sidebar;
