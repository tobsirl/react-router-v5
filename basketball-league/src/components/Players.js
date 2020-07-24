import React from 'react';
import Sidebar from './Sidebar';
import usePlayers from '../hooks/usePlayers';

const Players = () => {
  const { loading, response: players } = usePlayers();
  return (
    <div className="container">
      <h3 className="header">Players</h3>
      <Sidebar players={{loading, players}} />
    </div>
  );
};

export default Players;
