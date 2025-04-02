// NOTE: To master JavaScript just focus on Objects and Events.

// Objects can be decalred in two ways, as Literal and as Constructors.

// Singleton - Objects decalred using constructor are singleton. But objects created using literals are not singleton

// Object.create() // Creating object using Constructor 

//Creating symbol

const symbo = Symbol("key1")

const jsuser = {
    name: "Hasan",
    [symbo] : "key2",
    "full_name": "Abul Hasan Farrukh",
    age: 25,
    email: "hasan@gmail.com"
} // Object using Literals

console.log(jsuser.email); //accessing object value (mostly used method)
console.log(jsuser["age"]); //accessing object value (this method is used sometimes only in special cases)
console.log(jsuser["full_name"]); //accessing object value

console.log(jsuser[symbo]); //accessing object value which is a symbol, notice that there is no " " 

jsuser.email = "hasan@micro.com"
//Object.freeze(jsuser) //prevents making changes in keys of object. 
jsuser.email = "hasan@gogo.com"
console.log(jsuser);

jsuser.greeting = function() {
    console.log("Hello JS User");    
}

jsuser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.full_name}`); //greeting user with it's name using string interpolation    
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());




