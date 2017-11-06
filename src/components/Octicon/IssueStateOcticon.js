import React from 'react'
import Octicon from './Octicon'

const IssueStateOcticon = ({ state }) => {
  console.log(state)
  const iconName = {
    'OPEN': 'issue-opened',
    'CLOSED': 'issue-closed'
  }

  if (iconName) {
    return <Octicon name={iconName[state]} />
  }

  return <span></span>
}

export default IssueStateOcticon
