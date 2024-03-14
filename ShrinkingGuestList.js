let guests=["Ali","Mehdi","Hassan","Syed Ali Khamenei","Haj Qasim Solemani","Haider"];

for(let i=guests.length-1;i>1;i--){
  console.log("Dear",guests[i],", Sorry I cannot Invite you...\nThank you.!")
  guests.pop()
}

for(let i=guests.length-1;i>=0;i--){
  console.log("Dear",guests[i],", you are still invited!");
  guests.pop()
}

console.log(guests)//Finally the list is empty!..