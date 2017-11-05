import React, { Component } from 'react';
import IssueItem from '../IssueItem'

export default class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = { openedIssues: [] }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps &&
      nextProps.data &&
      nextProps.data.repository &&
      nextProps.data.repository.OpenedIssues
    ) {
      console.log(nextProps.data.repository.OpenedIssues.edges)
      this.setState({openedIssues: nextProps.data.repository.OpenedIssues.edges})
    }
  }

  render() {
    const { openedIssues } = this.state;

    if (openedIssues && openedIssues.length > 0) {
      return (
        <ul>
          {openedIssues.map(edge =>
            <IssueItem data={edge.node} key={edge.node.id}/>
          )}
        </ul>
      )
    }

    return <div>Loading...</div>
  }
}
