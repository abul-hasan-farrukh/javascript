//Functions in JavaScript

function myname() {
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("A");
    console.log("N");    
}

// myname()

//"myname" is the reference of function 
//"myname()" is execution of function 

function addnumbers(num1, num2) { //num1 and num2 are parameters of the function
    console.log(num1 + num2);    
} 

function addnumbers2(num1, num2) { //num1 and num2 are parameters of the function
    let result = num1+num2
    return result       
    console.log("Hasan"); // JavaScript functions never run any statement written after the return statement. So Hasan won't print.    
} 

const result = addnumbers(3, 8) //3 and 8 are arguments passed as value
const result2 = addnumbers2(3, 8) //3 and 8 are arguments passed as value

console.log("Result:", result); //undefined will be the ouput of this result value because it is not returned by the function. 
console.log("Result:", result2); //11 will be the ouput of this result value because it is returned by the function. 

function userLogin(username = "Sammy") { //defining a default value in case no value is passed, this value will skip the if condition. 
    //if (username === undefined) {
    if (!username) { //professional way of checking a condition using IF in JS. 
        console.log("Please enter a name");
        return        
    }
    return `${username} just logged in` 
}

console.log(userLogin("Hasan Sheikh")); //Hasan Sheikh logged in
console.log(userLogin("")); // just logged in
console.log(userLogin()); //undefined just logged in

//Functions with Objects

function calculateCartPrice1(...num1) { //... is called rest operator and also called spread operator depending on the use case
    return num1
}

console.log(calculateCartPrice1(200, 400, 600, 300)); 

function calculateCartPrice(val1, val2, ...num1) { //... is called rest operator and also called spread operator depending on the use case
    return num1
}

console.log(calculateCartPrice(200, 800, 900, 433, 576));

const user = {
    username: "Hasan",
    age: 19
}

function handleObject(anyobject) { //we can replace "anyobject" with "user" so that we can store specific object's value in function.
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);    
}

handleObject(user) //passing pre-created object as argument.

handleObject({
    username: "Hasan Sheikh",
    age: 22
}) //passing object directly as argument.


//Passing array in function 
const myArray = [200, 150, 300, 700]

function returnSecondValue(getArray) {
    return getArray[2]; //extracting value at 2 index from array  
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 600, 490])); //passing array directly as argument

