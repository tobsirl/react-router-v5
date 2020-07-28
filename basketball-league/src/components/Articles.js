import React from 'react'
import { useParams } from 'react-router-dom'

export default function Articles() {
  const {teamId} = useParams()
  return (
    <div>
      Articles {teamId}
    </div>
  )
}
