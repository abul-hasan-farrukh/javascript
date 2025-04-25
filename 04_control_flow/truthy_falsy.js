const username = "h@hasan.ai"

if(username) { //here we are assuming that this value is true
    console.log("Got user email");    
} else {
    console.log("Don't have user email");    
}

// Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values

// "0", 'false', " ", [], {}, function(){}

const array = []

if(array.length) {
    console.log("Array is empty");    
}

const emptyObject = {}

if(Object.keys(emptyObject.length === 0)) {
    console.log("Object is empty");    
}

//Nullish Coalescing Operator (??): It works on null value and undefined value.
//  It is used to deal with null and undefined value returned by database or firebase.

let val1;
val1 = 5 ?? 10

val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

//Ternary Operator

// condition ? true : false

const tea = 100

tea >=80 ? console.log("more than 80") : console.log("less than 80")


