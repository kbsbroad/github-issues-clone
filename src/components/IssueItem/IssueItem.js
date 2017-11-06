import React from 'react';
import { Octicon, IssueStateOcticon } from '@/components/Octicon';
import GithubAvatar from './../GithubAvatar/GithubAvatar';

const IssueItem = ({ owner, repo, data }) => {
  const issueUri =  `https://github.com/${owner}/${repo}/issues/${data.number}`;
  const issueNo = data.number;

  return (
    <li id={`issue_${issueNo}`} key={data.id}>
      {/* Issue open icon column */}
      <div className="icon flow-left">
        <IssueStateOcticon state={data.state} />
      </div>
      {/* Issue title column */}
      <div className="title flow-left">
        {/* main title */}
        <a href={`${issueUri}`}>
          {data.title}
        </a>
        {/* labels */}
        <span className="labels">
        {data.labels.edges.map((edge, index) =>
          <a key={index} href={`${issueUri}`} style={{
            backgroundColor: `#${edge.node.color}`,
            color: '#ffffff'
          }}>{edge.node.name}</a>
        )}
        </span>
        {/* sub title */}
        <div>
          <span className="opened-by">
            {`#${issueNo}`}
              opened by {`${data.author.login}`}
          </span>
        </div>
      </div>

      <div className="float-right">
        {/* author avatar */}
        <div className="avatar float-left">
        {data.author.avatarUrl &&
          <GithubAvatar author={data.author} width={20} height={20} />
        }
        </div>

        {/* comments */}
        <div className="comments float-right">
        {data.comments.totalCount > 0 &&
          [
            <Octicon name="comment"/>,
            <span className="text-small text-bold">{data.comments.totalCount}</span>
          ]
        }
        </div>
      </div>
    </li>
  )
}

export default IssueItem;
