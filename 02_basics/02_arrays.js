// Advanced topic of arrays
 

const marvel = ["ironman", "spiderman", "thor"]
const dc = ["superman", "batman", "aquaman"]

marvel.push(dc) //one array inside another array. 
console.log(marvel);
console.log(marvel[3][2]); //aquaman output

const newheroes = marvel.concat(dc) // merges two arrays and returns a new array.
console.log(newheroes); 

const allheroes = [...marvel, ...dc] //spreading of two arrays
console.log(allheroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array = another_array.flat(Infinity) // Infinity is the depth hack for flat(). flat() converts an array containing multiple arrays iniside one array.
console.log(real_array);
 
console.log(Array.isArray("Hasan")); //returns true or false
console.log(Array.from("Hasan")); // returns an arry of each letter. Mostly used in scraping data form websites.
console.log(Array.from({name: "Hasan"})); //returns empty array when we don't specify whether we need key or value based array. Interesting from interview perspective.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // of() function converts distinct elements into an array. 

//Note: Learn more about isArray(), from(), of() for better understanding.... 