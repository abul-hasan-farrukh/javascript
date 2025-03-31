// Arrays 

// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Shallow Copy: A shallow copy of an object is a copy whose properties share 
// the same references (point to the same underlying values) as 
// those of the source object from which the copy was made. 

// Deep Copy: A deep copy of an object is a copy whose properties do not
// share the same references (point to the same underlying values) as 
// those of the source object from which the copy was made. 

const myArray = [1, 2, 3, 4, 5, 9, 4]
console.log(myArray[3]);

const myHeroes = ["shaktiman", "nagraaj"]

const myArray2 = new Array(2, 4, 9, 3, 7, 8)

// Array Methods

myHeroes.push("super commando", "spiderman")
console.log(myHeroes);
myHeroes.pop() //removes the last element from array.
