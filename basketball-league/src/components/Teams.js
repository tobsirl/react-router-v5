import React from 'react';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import useTeam from '../hooks/useTeam';
import Sidebar from './Sidebar';

function Team({teams}) {
  const {teamId} = useParams();
  const {loading, response: team} = useTeam(teamId)
  console.log(team);

  if(loading) return <p className="text-center">Loading...</p>

  return (
    <div>
      {JSON.stringify(team, null, 2)}
    </div>
  )

}



const Teams = () => {
  const { url}= useRouteMatch()
  const { loading, response: teams } = useTeamNames();


  if(loading) return null

  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teams.map((team) => team)} /> 
      <Switch>
        <Route path={`${url}/:teamId`}>
          <Team />
        </Route>
      </Switch>

    </div>
  );
};

export default Teams;
