import React from 'react'
import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom'
import Sidebar from './Sidebar'

import useArticle from '../hooks/useArticle'
import useTeamArticles from '../hooks/useTeamArticles'

function Article() {
  const {teamId, articleId} = useParams()
  
  return (
    <div>
      Article = {teamId} - {articleId}
    </div>
  )

}

export default function Articles() {
  const {teamId} = useParams()
  const {loading, response: articles} = useTeamArticles(teamId)
  const {url} = useRouteMatch()

  console.log(articles);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container two-column">
      
      <Sidebar title="Articles" list={articles.map((article) => article.title)}/>
      <Switch>
        <Route path={`${url}/:articleId`}>
          <Article />
        </Route>
      </Switch>
    </div>
  )
}
