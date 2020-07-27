import React from 'react'
import {useParams} from 'react-router-dom'

export default function TeamPage() {
  const {teamId} = useParams()

  return (
    <div>
      Team Page {teamId}
    </div>
  )
}
