import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({ coins }) {
  return (
    <div key={coin.id}>
        <Link to={`/${coin.id}`}>{coin.name}</Link>
    </div>
  )
}
