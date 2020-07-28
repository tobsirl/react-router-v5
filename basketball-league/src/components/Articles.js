import React from 'react';
import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import Sidebar from './Sidebar';

import useArticle from '../hooks/useArticle';
import useTeamArticles from '../hooks/useTeamArticles';

function Article() {
  const { teamId, articleId } = useParams();
  const { loading, response: article } = useArticle({ teamId, articleId });
  console.log(article);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
}

export default function Articles() {
  const { teamId } = useParams();
  const { loading, response: articles } = useTeamArticles(teamId);
  const { path } = useRouteMatch();

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container two-column">
      <Sidebar
        title="Articles"
        list={articles.map((article) => article.title)}
      />
      <Switch>
        <Route path={`${path}/:articleId`}>
          <Article />
        </Route>
        <Route path="*">
          <div className="sidebar-instruction">Select an Article</div>
        </Route>
      </Switch>
    </div>
  );
}
