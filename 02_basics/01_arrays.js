// Arrays 

// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Shallow Copy (Call by Reference): A shallow copy of an object is a copy whose properties share 
// the same references (point to the same underlying values) as 
// those of the source object from which the copy was made. 

// Deep Copy (Call by Value): A deep copy of an object is a copy whose properties do not
// share the same references (point to the same underlying values) as 
// those of the source object from which the copy was made. 

const myArray = [1, 2, 3, 4, 5]
console.log(myArray[3]);

const myHeroes = ["shaktiman", "nagraaj"]

const myArray2 = new Array(2, 4, 9, 3, 7, 8)

// Array Methods

myHeroes.push("super commando", "spiderman")
console.log(myHeroes);
myHeroes.pop() //removes the last element from array.
myHeroes.unshift("batman") //adds the value at the start of the array by shifting other values. 
myHeroes.shift() //removes first element from the array. 

console.log(myHeroes.includes("ironman")); //includes() returns boolean value true or false. 
console.log(myHeroes.indexOf("shaktiman")); //returns the index of specified value. 

const newArray = myHeroes.join() //adds all the elements of array and convert it into string

console.log(myHeroes);
console.log(newArray);

//Slice and Splice

console.log("Original Array-> ", myArray);

const arr1 = myArray.slice(0, 2) //doesn't make changes in original array and returns the specified section only.
console.log(arr1);
console.log("B->", myArray);

const arr2 = myArray.splice(0, 3) //manipulates the original array i.e it removes the portion specified in splice(). 
console.log("C->", myArray);
console.log(arr2);