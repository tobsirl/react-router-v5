import React from 'react';
import { Link } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import Sidebar from './Sidebar';

const Teams = () => {
  const { loading, response: teams } = useTeamNames();
  console.log(teams);

  if(loading) return null

  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teams.map((team) => team)} />  
    </div>
  );
};

export default Teams;
