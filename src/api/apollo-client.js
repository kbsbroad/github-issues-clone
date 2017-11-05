import { ApolloClient } from 'apollo-client';
import { ApolloLink, concat } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'})

// Github API를 이용하기 위해서는 header 에 API 버전을 전송해야 한다.
const authGihubApi = new ApolloLink((operation, forward) => {
  const accessToken = process.env.GITHUB_ACCESS_TOKEN;

  if (!accessToken) {
    const msg = 'Github의 액세스 토큰이 필요합니다.'
    throw new Error(msg)
  }

  operation.setContext({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.github.v4.idl'
    }
  });
  return forward(operation);
})

const apolloClient = new ApolloClient({
  link: concat(authGihubApi, httpLink),
  cache: new InMemoryCache()
});

export default apolloClient
