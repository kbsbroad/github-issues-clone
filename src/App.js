import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './pages/Home'
import GithubIssuesPage from './pages/GithubIssuesPage'
import addApolloProvider from './api/apollo-provider'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Home}/>
        <Route path="/repos/:owner/:repo/issues" component={GithubIssuesPage}/>
      </div>
    </Router>
  );
}

const ApolloProvider = addApolloProvider()(App);
export default ApolloProvider;
