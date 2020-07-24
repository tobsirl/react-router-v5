import React from 'react';
import Sidebar from './Sidebar';
import {
  Switch,
  Route,
  useLocation,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { parse } from 'query-string';
import usePlayers from '../hooks/usePlayers';
import slug from 'slug';

function Player({ players }) {
  const { playerId } = useParams();
  const player = players.find(({ name }) => slug(name) === playerId);

  return <div>{JSON.stringify(player, null, 2)}</div>;
}

const Players = () => {
  const { url } = useRouteMatch();
  const location = useLocation();

  const team = location.search ? parse(location.search).teamId : null;

  const { loading, response: players } = usePlayers(team);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={players.map((player) => player.name)} />
      <Switch>
        <Route path={`${url}/:playerId`}>
          <Player players={players} />
        </Route>
        <Route path="*">
          <div className="sidebar-instruction">Select a Player</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Players;
