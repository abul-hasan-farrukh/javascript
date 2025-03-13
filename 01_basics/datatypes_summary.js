// Primitive Data Types (Call by Value)

// 7 Types:
//--------

// String, Number, Boolean, null(empty), undefined, Symbol, BigInt(used for very large values)   

const score = 100 //Number data type
const scoreValue = 42.3 //Number data type

const isLoggedIn = false //boolean
const Temp = null // null value

let userEmail; // it is undefined

const id = Symbol('123')  
const anotherId = Symbol('123')

console.log( id === anotherId);
//NOTE: Both symbol are unique even if they have same value.

const bigNumber =  3546161323186486745455n // bigInt value

// Non-Primitive or Reference Data Types are:

// NOTE: All non-primitive data types return "object" when checked using typeof function.

// Array, Objects, and Functions

let heroes = ["shaktiman", "Nagraaj", "SuperCommando"]; // JS Array

let myObj = {  //JS Object
    name: "hasan",
    age: 19,
    likes: "cricket",
}

const myFunction = function() {
    console.log("Hello GitHub");    
}  

console.log(typeof myFunction);


// NOTE: To master javascript you should learn about JS Objects and Browser events very well. 
// NOTE: JavaScript is a dynamically typed language. 