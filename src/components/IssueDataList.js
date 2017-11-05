import { graphql } from 'react-apollo';
import GithubIssuesQuery from '@/api/queries/issues'

import IssueList from './IssueList'

export default graphql(
  GithubIssuesQuery,
  {
    options: ({ match }) => {
      const { owner, repo } = match.params;
      return {
        variables: {
          owner,
          repo,
          pageSize: 10
        }
      }
    }
  }
)(IssueList);
