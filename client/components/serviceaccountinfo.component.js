import React from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css';

export default class ServiceAccountInfo extends React.Component{

render(){

        const columns = [{
            Header: 'Component Name',
            accessor: 'ComponentName' ,
            style: {'fontSize': 'smaller'},
            headerStyle: {'fontWeight': 'bold'}
        }, {
            Header: 'Component Type',
            accessor: 'ComponentType',
            style: {'fontSize': 'smaller'},
            headerStyle: {'fontWeight': 'bold'},
            maxWidth:150
        }, {
            Header: 'Resource',
            accessor: 'Resource',
            style: {'fontSize': 'smaller'},
            headerStyle: {'fontWeight': 'bold'}
        },
        {
            Header: 'Subscription Id',
            accessor: 'SubscriptionId',
            style: {'fontSize': 'smaller'},
            headerStyle: {'fontWeight': 'bold'}
        },
        {
            Header: 'Subscription Name',
            accessor: 'SubscriptionName',
            style: {'fontSize': 'smaller'},
            headerStyle: {'fontWeight': 'bold'}
        }
    ]

        return <ReactTable
        data={this.props.current.Components}
        filterable
        columns={columns}
        className="-striped -highlight"
        showPageSizeOptions= {false}/>
}

}