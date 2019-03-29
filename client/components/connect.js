import {connect} from "react-redux"
import Main from "./main.component";
import { bindActionCreators } from "redux";
import * as allactions from '../actions/allactions';

function mapDispatchToProps(dispatcher){
return bindActionCreators(allactions,dispatcher)
}

//provider to pass the store as first argument
function  mapStateToProps(storeData){
    console.log("storedta"+storeData)
return {
    serviceaccounts:storeData.serviceaccounts
}
}


// app is a wrapper component  main + props
var app= connect(mapStateToProps, mapDispatchToProps)(Main);

export default app;