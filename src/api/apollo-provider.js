import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apollo-client'

const addApolloProvider = options => {
  return function(WrappedComponent) {
    return class WrapApolloProvider extends Component {
      render() {
        const mergedOpts = Object.assign({
          client: apolloClient
        }, options || {})

        return (
          <ApolloProvider {...mergedOpts}>
            <WrappedComponent />
          </ApolloProvider>
        )
      }
    }
  }
}

export default addApolloProvider
