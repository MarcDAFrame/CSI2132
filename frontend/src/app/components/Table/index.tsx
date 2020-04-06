import * as React from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';


export class TableComponent extends React.Component {
    client: ApolloClient
    constructor(props) {
      super(props);
      const networkInterface = createNetworkInterface({
        uri: 'http://localhost:8080/graphql'
      })
  
      this.client = new ApolloClient({
        networkInterface: networkInterface
      });
    }

    render() {
        return (
          <div className="App">
            <ApolloProvider client={this.client}>
            </ApolloProvider>
        </div>
        )
    }
}