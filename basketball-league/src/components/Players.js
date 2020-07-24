import React from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import usePlayers from '../hooks/usePlayers';

const Players = () => {
  const location = useLocation();

  const team = location.search ? parse(location.search).teamId : null;

  const { loading, response: players } = usePlayers(team);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={players.map((player) => player.name)} />
    </div>
  );
};

export default Players;
