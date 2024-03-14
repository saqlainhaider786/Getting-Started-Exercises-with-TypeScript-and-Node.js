let favPlaces=["Makkah","Madina","Najaf","Karbala","Iran"];
let orgArray=[...favPlaces];//storing the original array.

favPlaces.sort()//array in alphabetical order.
console.log(favPlaces)//array in alphabetical order.
console.log(orgArray)//array in original order.

favPlaces.reverse()//Reversing the array
console.log(favPlaces)//The reversed array
console.log(orgArray)//Original array

orgArray.reverse()//Reversing original array
console.log(orgArray)
orgArray.reverse()//Getting back its original order
console.log(orgArray)