import React from 'react';
import ServiceAccountInfo from './serviceaccountinfo.component';
import ReactTable from "react-table";
import 'react-table/react-table.css';


export default class ServiceAccounts extends React.Component{

        render(){
            var accountDetails={};
            const columns = [{
                Header: 'Service Account',
                accessor: 'Name' ,
                style: {'fontSize': 'smaller'},
                headerStyle: {'fontWeight': 'bold'}
                
              }, {
                Header: 'Domain',
                accessor: 'Domain',
                style: {'fontSize': 'smaller'},
                headerStyle: {'fontWeight': 'bold'}
                
              }]
             
              return <div className="d-md-flex h-md-100 align-items-center">
              <div className="col-md-2 p-0 bg-indigo h-md-100">
                  <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                      <div className="logoarea pt-5 pb-5">
                      <ReactTable
                        data={this.props.serviceaccounts}
                        filterable
                        columns={columns}
                        showPageSizeOptions= {false} 
                        className="-striped -highlight"
                        getTdProps={(state, rowInfo, column, instance) => {
                            return {
                              onClick: (e, handleOriginal) => {
                                console.log(rowInfo.row.Name);
                                accountDetails = this.props.serviceaccounts.find(p=>p.Name==rowInfo.row.Name)
                                this.setState({currentAccountDetails: accountDetails })
                                if (handleOriginal) {
                                  handleOriginal();
                                }
                              }
                            };
                          }}
                        />
                      </div>
                  </div>
                  <div style={{ textAlign: "center", fontSize: 'smaller' }}>
                    <em>Tip: Click on individual account for more actions !</em>
                </div>
              </div>
              <div className="col-md-10 p-0 bg-white h-md-100 loginarea">
                  <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
                  {this.state?<ServiceAccountInfo current={this.state.currentAccountDetails}/>:null}
                  </div>
              </div>
              </div>
    }
}