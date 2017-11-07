import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Octicon, IssueStateOcticon } from '@/components/Octicon';
import IssueLabel from '@/components/IssueLabel'
import GithubAvatar from './../GithubAvatar/GithubAvatar';
import { getIssuesUri } from '@/utils/url';

import './styles/IssueItem.scss'

const IssueItem = ({ owner, repo, data }) => {
  const issueUri =  `https://github.com/${owner}/${repo}/issues/${data.number}`;
  const issueNo = data.number;
  const createdDate = moment(data.createdAt);
  const issueState = data.state

  return (
    <li id={`issue_${issueNo}`} key={data.id} className="issue-row">
      <div className="data-table">
        {/* Issue open icon column */}
        <div className="issue-state-icon column">
          <IssueStateOcticon state={issueState} options={{ class: data.state.toLowerCase()}}/>
        </div>
        {/* Issue title column */}
        <div className="issue-title column">
          {/* main title */}
          <a href={`${issueUri}`} className="title-text">
            {data.title}
          </a>
          {/* labels */}
          <span className="labels">
          {data.labels.edges.map(({ node }, index) =>
            <IssueLabel
              key={index}
              url={
                getIssuesUri(owner, repo, `is:issue is:${issueState.toLowerCase()} label:${node.name}`)
              }
              text={node.name}
              color={node.color}
            />
          )}
          </span>
          {/* sub title */}
          <div>
            <span className="opened-by">
              {`#${issueNo}`}&nbsp;
              opened&nbsp;
              <relative-time datetime={createdDate.format()} title={createdDate.format()}>
                {createdDate.fromNow()}
              </relative-time>&nbsp;
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
          {data.comments.totalCount > 0 &&
            <a href={issueUri}>
              <Octicon name="comment" />
              <span className="count">{data.comments.totalCount}</span>
            </a>
          }
          </div>
        </div>
      </div>
    </li>
  )
}

IssueItem.propTypes = {
  owner: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default IssueItem;
