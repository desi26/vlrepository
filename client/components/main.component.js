import React from 'react';
import certificate from '../images/certificate.svg'; 
import security from '../images/security.svg'; 
import {Link} from 'react-router'
export default class Main extends React.Component{
componentDidMount(){
    this.props.GetAllServiceAccounts();
}
    render(){
        console.log(this.props.serviceaccounts);
        return <div><nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
        <Link to="/" className="navbar-brand">
        <img src={security} width="30" height="30" className="d-inline-block align-top" alt=""/>
        Service Accounts
        </Link>
        <Link to="/certificates" className="navbar-brand">
        <img src={certificate} width="30" height="30" className="d-inline-block align-top" alt=""/>
        Certificates
        </Link>
      </nav><br/> {React.cloneElement(this.props.children,this.props)}</div>
   
    }

}
