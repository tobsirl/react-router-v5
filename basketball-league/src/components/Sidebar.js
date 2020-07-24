import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slug from 'slug';
import usePlayers from '../hooks/usePlayers';

function Sidebar() {
  const { loading, response: players } = usePlayers();
  console.log(players);

  if (loading) return null;
  return (
    <div>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            <Link to="">{player.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
