// Immediately Invoked Function Expression (IIFE)

//IIFE is used to remove the pollution caused by variables in global scope. These function get executed immediately.
//NOTE: When two IIFE are declared together then we have to stop the execution of 1st using ;    

(function tea () { //This is named (tea) IIFE
    console.log(`Database Connected`);    
} ) (); //calling function immediately by wrapping the function in parentheses() and stopping it using ; .

( (name) => {
    console.log(`DB Connected ${name}`);    
} ) (`Hasan`)


