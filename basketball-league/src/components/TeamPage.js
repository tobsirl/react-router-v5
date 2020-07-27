import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import slug from 'slug';

import useTeamNames from '../hooks/useTeamNames';
import useTeamArticles from '../hooks/useTeamArticles';
import useTeam from '../hooks/useTeam';
import TeamLogo from '../components/TeamLogo'

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
  const { url } = useRouteMatch();
  const { teamId } = useParams();
  const { articles, teamNames, team, loading } = useTeamPageData(teamId);
  

  if (loading) return <p className="center">Loading...</p>;

  if (!teamNames.includes(teamId)) {
    return <h1 className="text-center">The {teamId} is not a valid team.</h1>;
  }

  return (
    <div className="panel">
      <TeamLogo id={teamId} />
      <h1 className="medium-header">{team.name}</h1>
      <h4 style={{ margin: 5 }}>
        <Link to={{ pathname: '/players', search: `?teamId=${teamId}` }}>
          View Roster
        </Link>
      </h4>
      <h4>Championships</h4>
      <ul className="championships">
        {team.championships.map((ship) => (
          <li key={ship}>{ship}</li>
        ))}
      </ul>
      <ul className="info-list row" style={{ width: '100%' }}>
        <li>
          Est.<div>{team.established}</div>
        </li>
        <li>
          Manager<div>{team.manager}</div>
        </li>
        <li>
          Coach<div>{team.coach}</div>
        </li>
        <li>
          Record
          <div>
            {team.wins}-{team.losses}
          </div>
        </li>
      </ul>
      <h2 className="header">Articles</h2>
      <ul className="articles">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`${url}/articles/${slug(article.title)}`}>
              <h4 className="article-title">{article.title}</h4>
              <div className="article-date">
                {new Date(article.date).toLocaleDateString()}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
