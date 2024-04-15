let gsts=Array()//old guest list
gsts=["Mehdi","Syed Ali Khamenei","Haj Qasim Solemani"];

// Adding three new gsts in beggining,at middle and at the end of the list.
gsts.unshift("Ali");
gsts.push("Haider");
gsts.splice(2,0,"Hassan")

for(let guest in gsts){
    console.log(`Dear ${guest}, it is pleasure for me that I am inviting you to dinner at my home, Kindly accept my invitation and make my home blessed...\nThank you.!`);
}