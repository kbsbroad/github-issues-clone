import React from 'react'

const IssueItem = ({ data }) => {
  const { id, title } = data;
  return (
    <li key={id}>
      {title}
    </li>
  )
}

export default IssueItem
