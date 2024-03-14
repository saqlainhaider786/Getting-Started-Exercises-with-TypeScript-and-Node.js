let guests=Array()//old guest list
guests=["Mehdi","Syed Ali Khamenei","Haj Qasim Solemani"];

// Adding three new guests in beggining,at middle and at the end of the list.
guests.unshift("Ali");
guests.push("Haider");
guests.splice(2,0,"Hassan")

for(let guest in guests){
    console.log(`Dear ${guest}, it is pleasure for me that I am inviting you to dinner at my home, Kindly accept my invitation and make my home blessed...\nThank you.!`);
}