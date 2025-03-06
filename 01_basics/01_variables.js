// It is programmers choice to use semicolon(;) or not.
const accountId = 145632 // value of const variable can't be changed 
let email = "hsn@gmail.com"
var password = "1596" // In modern JS world, var keyword in not used to declare variables  
let state;

accountCity = "Kashmir" // It is not recommeded to declare varibles like this in JS.

email = "hoon@gmail.com"
password = "4562"
accountCity = "Lucknow"

console.table([accountId, email, password, accountCity, state])

/* 
NOTE: Prefer not to use "var" because of issue with 
block scope and functional scope 
*/
