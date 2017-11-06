import React from 'react'
import { Octicon, IssueStateOcticon } from '@/components/Octicon';

import './styles/IssueListHeader.scss'

const IssueListHeader = ({repo}) => {
  const issueUri = `https://github.com/${repo.owner.login}/${repo.name}/issues`
  return (
    <div className="issue-list-header" id="js-issues-toolbar">
      <div className="issue-states">
        <a href={`${issueUri}?q=is%3Aopen+is%3Aissue`} className="btn-link selected">
          <IssueStateOcticon state="OPEN" />
          {repo.OpenedIssues.totalCount} Open
        </a>

        <a href={`${issueUri}?q=is%3Aclosed`} className="btn-link ">
          <Octicon name="check" />
          {repo.ClosedIssues.totalCount} Closed
        </a>
      </div>
    </div>
  )
}

export default IssueListHeader
