const user = {
    username: "Hasan",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to our website`); // this keyword is used to refer to the current context.
        console.log(this);
        
    } 
}

// user.welcomeMessage()
// user.username= "Sammy"
// user.welcomeMessage()
console.log(this); //In node environment this will give empty object output. But in windows environment it will display window object as output.  

// function chai() {
//     let username = "Hasan"
//     console.log(this.username);
// }

// chai()

//Arrow function starts below

// const chai = function () {
//     let username = "Hasan"
//     console.log(this.username);
// } 


const chai =  () => {
    let username = "Hasan"
    console.log(this);
} 

chai()

const addtwo = (num1, num2) => { // this is normal arrow function
    return num1+num2
}

console.log(addtwo(2,3));

const addtwoo = (num1, num2) => (num1+num2) // this is implicit return arrow function

const addtwooo = (num1, num2) => ({username: "Hasan"}) // returning object via implicit arrow function
    
console.log(addtwoo(12,3));