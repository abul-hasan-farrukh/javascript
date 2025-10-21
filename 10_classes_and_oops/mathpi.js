//Changing the value of PI.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //this property gives you hidden information about the object
//console.log(descriptor);

//console.log(Math.PI);
// Math.PI = 5;
//Creating my own object.

/* Object.defineProperty(Math, 'PI', {
    //writable: false,
    enumerable: true //if enumerable is false then we can't perform iteration using loops on the "name" key. If it is "true" then iteration is allowed.
})  */

for (const [key, value] of Object.entries(Math)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`); //this line will only print the key:value pairs of the object. 
    }
}


const newObj = Object.create(null);

const coffee = {
    name: "Hasan",
    price: 250,
    isAvailable: true,

    orderCoffee : function (){
        console.log("Coffee not Available");
        
    }
}

console.log(coffee);
console.log(Object.getOwnPropertyDescriptor(coffee, "name")); //this will print the properties of "name" key.

//Changing the properties of coffee object.
//Below code will change the writable and enumerable to false.

Object.defineProperty(coffee, 'name', {
    writable: false,
    enumerable: false //if enumerable is false then we can't perform iteration using loops on the "name" key. If it is "true" then iteration is allowed.
}) 

console.log(Object.getOwnPropertyDescriptor(coffee, "name")); // this will print the modified object.

for (const [key, value] of Object.entries(coffee)) {
    console.log(`${key} : ${value}`); //this line will print the function inside the coffee object as it is. Mtlb code phat jayega.
}

for (const [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`); //this line will only print the key:value pairs of the object. 
    }
}