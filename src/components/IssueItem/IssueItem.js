import React from 'react';
import { Octicon, IssueStateOcticon } from '@/components/Octicon';
import GithubAvatar from './../GithubAvatar/GithubAvatar';

import './styles/IssueItem.scss'

const IssueItem = ({ owner, repo, data }) => {
  const issueUri =  `https://github.com/${owner}/${repo}/issues/${data.number}`;
  const issueNo = data.number;

  return (
    <li id={`issue_${issueNo}`} key={data.id} className="issue-row">
      <div className="data-table">
        {/* Issue open icon column */}
        <div className="issue-state-icon column">
          <IssueStateOcticon state={data.state} options={{ class: data.state.toLowerCase()}}/>
        </div>
        {/* Issue title column */}
        <div className="issue-title column">
          {/* main title */}
          <a href={`${issueUri}`} className="title-text">
            {data.title}
          </a>
          {/* labels */}
          <span className="labels">
          {data.labels.edges.map((edge, index) =>
            <a className="label" key={index} href={`${issueUri}`} style={{
              backgroundColor: `#${edge.node.color}`,
              color: '#ffffff'
            }}>{edge.node.name}</a>
          )}
          </span>
          {/* sub title */}
          <div>
            <span className="opened-by">
              {`#${issueNo}`}&nbsp;
              opened&nbsp;
              <relative-time datetime="2017-11-06T09:38:09Z" title="2017년 11월 6일 오후 6:38 GMT+9">
                6 hours ago
              </relative-time>
              by {`${data.author.login}`}
            </span>
          </div>
        </div>

        <div className="user-comments">
          {/* author avatar */}
          <div className="avatar column">
          {data.author.avatarUrl &&
            <GithubAvatar author={data.author} width={20} height={20} />
          }
          </div>

          {/* comments */}
          <div className="comments column">
          {/* react 16부터 배열로 엘리먼트 반환이 가능한데, key가 없으면 warning이 발생한다. */}
          {data.comments.totalCount > 0 &&
            [
              <Octicon name="comment" key="1"/>,
              <span className="count" key="2">{data.comments.totalCount}</span>
            ]
          }
          </div>
        </div>
      </div>
    </li>
  )
}

export default IssueItem;
