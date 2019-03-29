import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route,IndexRoute,browserHistory} from 'react-router'
import ServiceAccounts from './components/ServiceAccounts.component';
import Certificates from './components/certificates.component';
import Main from './components/main.component'
import {Provider} from 'react-redux'
import store from './store/store'
import app from './components/connect';


// Code Here


var router =<Provider store={store}><Router history={browserHistory}>
    <Route path="/" component= {app}>
    <IndexRoute component ={ServiceAccounts}/>
    <Route path="/certificates" component={Certificates}></Route>
    </Route>
</Router></Provider>

ReactDOM.render(router,document.getElementById('content'));



