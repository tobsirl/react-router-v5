import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from './Sidebar'

import useArticle from '../hooks/useArticle'
import useTeamArticles from '../hooks/useTeamArticles'

export default function Articles() {
  const {teamId} = useParams()
  const {loading, response: articles} = useTeamArticles(teamId)

  console.log(articles);

  if (loading) return <p className="text-center">Loading...</p>;
  return (
    <div className="container two-column">
      Articles {teamId}
      <Sidebar title="Articles" list={articles.map((article) => article.title)}/>
    </div>
  )
}
