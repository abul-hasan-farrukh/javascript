//for of loop

//It is an array specific loop which is used on array and objects

// ["", "", ""]
// [{}, {}, {}]

const myArray = [1, 2, 3, 4, 5]

for (const num of myArray) { 
    console.log(num);
}

const greeting = "Hello Hasan!!!"
for (const greet of greeting) {
    if (greet == " ") {
        continue
    }
    console.log(`Each character is ${greet}`);    
}

//Map 

//Map is a collection of Key-Value pairs in JS. A key in a map may only occur once i.e. it stores unique values.
//  It is iterated by key-value pairs using for-of loop. Map is not iterable by for-in loop.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);    
}

const myObejct = {
    'game1' : 'NFS',
    'game2' : 'MotoGP'
}

for (const element of object) {
    //objects are not iterable by for-of loop
}