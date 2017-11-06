import React, { Component } from 'react';
import IssueListHeader from '@/components/IssueListHeader'
import IssueItem from '@/components/IssueItem'

import './styles/IssueList.scss'

export default class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      repo: '',
      openedIssues: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps &&
      nextProps.data &&
      nextProps.data.repository &&
      nextProps.data.repository.OpenedIssues
    ) {
      this.setState({
        owner: nextProps.data.repository.owner.login,
        repo: nextProps.data.repository,
        openedIssues: nextProps.data.repository.OpenedIssues.edges
      })
    }
  }

  render() {
    const { owner, repo, openedIssues } = this.state;

    if (openedIssues && openedIssues.length > 0) {
      return (
        <div className="issues-container">
          <IssueListHeader repo={repo} />
          <ul className="issue-list">
            {openedIssues.map(edge =>
              <IssueItem
                key={edge.node.id}
                owner={owner}
                repo={repo.name}
                data={edge.node}
              />
            )}
          </ul>
        </div>
      )
    }

    return <div>Loading...</div>
  }
}
