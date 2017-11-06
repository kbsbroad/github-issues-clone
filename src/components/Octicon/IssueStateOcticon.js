import React from 'react'
import Octicon from './Octicon'

const IssueStateOcticon = ({ state, options = {} }) => {
  const iconName = {
    'OPEN': 'issue-opened',
    'CLOSED': 'issue-closed'
  }

  if (iconName) {
    return <Octicon name={iconName[state]} options={options}/>
  }

  return <span></span>
}

export default IssueStateOcticon
