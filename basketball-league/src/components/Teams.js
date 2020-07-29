import React from 'react';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import useTeam from '../hooks/useTeam';
import Sidebar from './Sidebar';
import TeamLogo from './TeamLogo';
import Loading from './Loading'

function Team() {
  const { teamId } = useParams();
  const { loading, response: team } = useTeam(teamId);

  if (loading) return <Loading />

  return (
    <div className="panel">
      <div style={{ width: '100%' }}>
        <TeamLogo id={team.id} className="center" />
        <h1 className="medium-header">{team.name}</h1>
        <ul className="info-list row">
          <li>
            Est.<div>{team.established}</div>
          </li>
          <li>
            Manager<div>{team.manager}</div>
          </li>
          <li>
            Coach<div>{team.coach}</div>
          </li>
        </ul>
        <Link className="center btn-main" to={`/${teamId}`}>
          {team.name} Team Page
        </Link>
      </div>
    </div>
  );
}

const Teams = () => {
  const { path } = useRouteMatch();
  const { loading, response: teamNames } = useTeamNames();

  if (loading) return <Loading />

  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teamNames} />
      <Switch>
        <Route path={`${path}/:teamId`}>
          <Team />
        </Route>
        <Route path="*">
          <div className="sidebar-instruction">Select a Team</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Teams;
