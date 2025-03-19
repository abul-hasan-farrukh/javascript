const name = "hasan " // way to decalre a string
const num = 12

// console.log(name + num + " Value" ); // This is an outdated method of concatenating strings so we will not use it. 

console.log(`Hello, my name is ${name.toUpperCase()} and roll no is ${num}`); 

// NOTE: We use `` for string concatenation because it provides string interpolation i.e. we create placeholders and use them to concatenate strings.

const game = new String("Mario-Game-Over") // Another way to declare a string using JS object and string constructor. It gives us access to many built-in string methods and stores each character in key:value pair.

console.log(game[3]); // gives the output "i" because it is at 3rd position.
console.log(game.__proto__); // output is JS string object {}

console.log(game.length); // output is 5
console.log(game.toUpperCase());
console.log(game.slice(2,4)); // output "ri"
console.log(game.charAt(3)); // output "i"
console.log(game.indexOf('r')); // output 2

const newGame = game.substring(0,4); // Starts from 0 and stops at 3 
console.log(newGame); // output "Mari"

const anotherGame = game.slice(-8, 7) // starts from reverse
console.log(anotherGame); // output "rio-G"

const newString = "   Hasan   "
console.log(newString);
console.log(newString.trim());

const url = "https://www.hasan.com/newpage%20load"
console.log(url.replace('%20', '-'));
console.log(url.includes('great')); // output "false"

console.log(game.split('-')); // "-" is a separator. Output is an array [ 'Mario', 'Game', 'Over' ].
 