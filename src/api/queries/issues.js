import gql from 'graphql-tag';

const GithubIssuesQuery = gql`
query (
  $owner: String!,
  $repo: String!,
  $pageSize: Int!
){
  repository(owner:$owner, name:$repo) {
    owner {
      login
    }
    name
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
          state
          author {
            avatarUrl
            login
          }
          createdAt
          comments {
            totalCount
          }
          labels(first:5) {
            edges {
              node {
                name
                color
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
