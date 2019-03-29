export default function serviceaccounts(defStore=[],action){
    //console.log("in reducer", action);
switch(action.type){
    case 'FETCH_ALL_ACCOUNTS':
    return action.response
    default:
    return defStore;
}
}