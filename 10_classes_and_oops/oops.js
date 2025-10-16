//Object Literal

const user = {
    username: "Hasan",
    loginCount: 8,
    issignedIn: true,

    getUserDetails: function(){
        console.log("Got User Details from DB");
        console.log(`Username: ${this.username}`);
        console.log(this); //this will print all the content of the user object.
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this); // this will print empty object because nothing is written in Global context. It keeps on changing. It returns the Window object when we run it inside browser. 


// Constructor Function
// new keyword is a constructor function that allows you to create multiple instances from single object literal.
// "new" keyword creates a new object which is called instance.
// Because of new keyword a constructor function is called which packs all the arguments and gives back to you.
// Then, with the help of "this" keyword all the arguments get injected inside object.

//const promiseOne = new Promise();
const date = new Date();

function Username(Username, loginCount, issignedIn){
    this.username = Username; //the value on left side is our variable and right side is the value we are passing.
    this.loginCount = loginCount;
    this.issignedIn = issignedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    //return this; //this sentence will return the entire object. Even if we don't return, our code will work properly, because return is already defined implicitly.
}

const user1 = new Username("Hasan", 19, true);
const user2 = new Username("Farrukh", 12, false); //we will not call user2 using console log but it will still overwrite the values stored in user1.
//  So user2 will print in the terminal. To avoid this problem, we will use the "new" keyword in both variables.

console.log(user1.constructor); //this will return a reference of itself.
console.log(user2);
