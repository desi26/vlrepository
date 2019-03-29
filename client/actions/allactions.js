import axios from 'axios'

export function GetAllServiceAccounts(){
//make an ajax request
//when recieved the response 
//dispatch an action!
let request =axios.get("https://msftsubscriptioncrawlerapi.azurewebsites.net/api/accounts")
return dispatch=>{
request.then(
    (response)=>{dispatch({type:"FETCH_ALL_ACCOUNTS", response:response.data })},
    (err)=>{console.log(err);}
)
}
}