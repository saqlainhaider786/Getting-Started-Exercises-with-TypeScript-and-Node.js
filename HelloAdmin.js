let users=["Admin","Ahmed","Ali","Haider","Hassan"];

for(let user of users){
    if(user==="Admin"){
        console.log(`Hello ${user}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}