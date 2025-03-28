// ++++++++++ NUMBERS +++++++++

const score = 300
console.log(score);


const balance = new Number(533) // here we have specifically defined that the object is of number type. 
console.log(balance);

console.log(balance.toString().length); // conversion of number to string data type so we are using string's length property to get length.  
console.log(balance.toFixed(2)); // output 533.00, toFixed is mostly used in eCommerce applications for calculation of prices.

const nextNumber = 123.5434

console.log(nextNumber.toPrecision(4)); //priority is given to number before decimal point for precision. 

const lakhs = 1000000
console.log(lakhs.toLocaleString('en-IN')); //this method converts number into readable format. 

// ++++++++++ MATHS +++++++++++++

// Maths is a library and object with many properties that comes by default in JS.

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); // round is mostly used in applications
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.min(4, 8, 9 ,3, 7)); //finds minimum value in array.
console.log(Math.max(8, 6, 3, 9, 5 )); //finds maximum value in array.

console.log(Math.random()); // gives value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); //floor rounds off to single value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);