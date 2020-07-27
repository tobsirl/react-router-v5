import React from 'react';
import { useParams } from 'react-router-dom';

import useTeamNames from '../hooks/useTeamNames';
import useTeamArticles from '../hooks/useTeamArticles';
import useTeam from '../hooks/useTeam';

function useTeamPageData(teamId) {
  const { loading: loadArticles, response: articles } = useTeamArticles(teamId);
  const { loading: loadTeamNames, response: teamNames } = useTeamNames();
  const { loading: loadTeam, response: team } = useTeam(teamId);

  return {
    articles,
    teamNames,
    team,
    loading: loadArticles || loadTeam || loadTeamNames,
  };
}

export default function TeamPage() {
  const { teamId } = useParams();
  const { articles, teamNames, team, loading } = useTeamPageData(teamId);

  return <div>Team Page </div>;
}
