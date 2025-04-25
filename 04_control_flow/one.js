//Control Flow statements in JavaScript

//IF Statemment

if (true) {
    //execute this code block
}

if (false) {
    //code inside this block won't execute
}

const temp = 37

if (temp > 40) {
    console.log("temperature less than 40");
} else {
    console.log("temperature greater than 40");
} 

const score = 200 

// if (score > 100) {
//    // var power = "fly" //scope of var keyword is global so both console log will run that's why we will not use it.
// //     let power = "fly" //scope of var keyword is global so both console log will run.
// //     console.log(`User power: ${power}`);    
// // }
// // console.log(`User power: ${power}`);



// if (amount > 500) console.log("It's OK"), console.log("It's not OK"); //this is called "implicit scope" or shorthand notation but unreadable code so we don't use it. 

// const amount = 1000

// if (amount < 500) {
//     console.log("less than 500");
    
// } else if(amount < 750) {
//     console.log("less than 750");
    
// } else {
//     console.log("greater than 1000");
//     } 

 const userLoggedIn = true
 const debitard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true 
 
if (userLoggedIn && debitard) { //&& checks both condition are true or not
    console.log("Allowed to shop");    
} 

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User can log In");    
}


