function displayMailingLabel(name, address, city, state, zip){
   let mailingLabel = name + address + city + state + zip;
   console.log(mailingLabel);
}

let someName = "Quannette ";
let someAddress = "1234 Georgia Drive ";
let someCity = "Atlanta ";
let someState = "Georgia ";
let someZip = 12345

displayMailingLabel(someName, someAddress, someCity, someState, someZip);

function add(num1, num2){
let someNumber = num1 + num2;
return someNumber;
}

const someNumber = add(5,3);
console.log(someNumber);




