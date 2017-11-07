import React from 'react';
import ProTypes from 'prop-types';

import './styles/IssueLabel.scss'

const IssueLabel = ({ url, text, color }) => {
  return (
    <a className="issue-label" href={url} style={{
      backgroundColor: `#${color}`
    }}>{text}</a>
  )
}

IssueLabel.propTypes = {
  url: ProTypes.string.isRequired,
  text: ProTypes.string.isRequired,
  color: ProTypes.string.isRequired
}

export default IssueLabel
