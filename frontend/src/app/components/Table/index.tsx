import * as React from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import ReactTable from 'react-table'
import 'react-table/react-table.css'


interface TableComponentProps{
    columns: any[],
    
}
interface TableComponentState {
}


export class TableComponent extends React.Component<TableComponentProps, TableComponentState> {
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
                    <TableList columns={this.props.columns}/>
                </ApolloProvider>
            </div>
        )
    }
}
interface Props{
    loading?: boolean
    data?: any[]
    columns: any[]
}
export class TableList extends React.Component<Props, {}> {
    client: ApolloClient
    constructor(props) {
        super(props);
    }

    render() {
        const {loading, data, columns} = this.props
        if (loading) {
            return <div>Loading</div>;
        } else {
            return (
                <div className="App">
                    <ReactTable className="-striped -highlight"
                        data={data}
                        columns={columns}
                    />
                </div>
            );
        }
    }
}