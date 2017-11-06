import React from 'react'
import { Octicon, IssueStateOcticon } from '@/components/Octicon';

const IssueListHeader = ({repo}) => {
  const issueUri = `https://github.com/${repo.owner.login}/${repo.name}/issues`
  return (
    <div id="js-issues-toolbar">
      <div className="table-list-filters">
        <div class="table-list-header-toggle states float-left pl-3">
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
    </div>
  )
}

export default IssueListHeader
