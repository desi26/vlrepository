import { combineReducers } from "redux";
import serviceaccounts from './serviceaccounts.reducer';

var rootReducer = combineReducers({
serviceaccounts:serviceaccounts
});

export default rootReducer;


//enhanced object Literal(ES6)

//var name="Microsoft"
//var company={name};