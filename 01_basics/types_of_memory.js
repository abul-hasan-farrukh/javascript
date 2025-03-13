// Types of memory in JS.

// Stack and Heap Memory

// Stack memory is used in Primitive Datatypes. When stack memory is used it gives us a copy the variables we declare.  
// Heap memory is ued in Non-Primitive Datatypes. When heap memory is used it gives us a reference  of the original value of variables we declare.

//Stack Example:

let myName = "hasan"

let myNickname = myName
myNickname = "farrukh"

console.log(myName);
console.log(myNickname);

//-----------------------

//Heap Example:

let userOne = {
    email: "hasan@google.com",
    phone: 9532446928
}

let userTwo = userOne

userTwo.email = "jason@google.com"

console.log(userOne.email);
console.log(userTwo.email);




