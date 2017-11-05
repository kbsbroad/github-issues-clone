import gql from 'graphql-tag';

const GithubIssuesQuery = gql`
query (
  $owner: String!,
  $repo: String!,
  $pageSize: Int!
){
  repository(owner:$owner, name:$repo) {
    OpenedIssues: issues(
      first:$pageSize,
      states: OPEN,
      orderBy: {
        field: CREATED_AT,
        direction: DESC
      }
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          number
          title
          url
          comments {
            totalCount
          }
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
    ClosedIssues: issues(states: CLOSED) {
      totalCount
    }
  }
}
`;

export default GithubIssuesQuery
