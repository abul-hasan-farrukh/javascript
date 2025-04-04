//More about JavaScript objects

const tinderUser = {}

tinderUser.id = "145abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const newUser = {
    name: "Hasan",
    age: 25,
    email: "hasan@google.com",
    fullname: {
        username: {
            first_name: "Abul",
            last_name: "Farrukh"
        }
    } 
}

console.log(newUser.fullname.username.first_name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2} //this creates object inside another object
const obj4 = Object.assign({}, obj1, obj2) //this creates object inside a object
const obj5 = {...obj1, ...obj2} // spreading of objects in a single object  

console.log(obj3);
console.log(obj4);
console.log(obj5);
 
// When we work with database we get data in an array of objects. Like the below one.  
const users = [
    {
        id: 123,
        email: "hasan@gmail.com"
    },
    {
        id: 125,
        email: "jason@gmail.com"
    }
]

console.log(users[1].email);
console.log(Object.keys(tinderUser)); // grabs keys of objects in an array
console.log(Object.values(tinderUser)); // grabs keys of objects in an array
console.log(Object.entries(tinderUser)); // grabs each key and value of object and stores it in a single array
 
console.log(tinderUser.hasOwnProperty('isLogged')); //returns a boolean value, used to check whether a value is present or not.

//Destructuring of Objects starts from here: 
// Destructuring is mostly used in ReactJS

const course = {
    coursename: "JS in Hindi",
    price: 99,
    Instructor: "hiteshbhai", 
}

//console.log(course.Instructor) //mehod of accessing object value

const {Instructor} = course //another popular way of accessing object's value
console.log(Instructor); ////same output

const {Instructor: teacher} = course //another way of accessing object's value
console.log(teacher); //same output

//demo of react prop, when we need to destructure it.  
const navbar = ({company}) => {

}

navbar(company = "hasan")
// react demo ends here

//destructuring of array is rare

//concept of APIs
//Objcets without name is called JavaScript Object Notation (JSON) 
// {
//     "name": "hasan",
//     "age": 21,
//     "course": "MCA"
// }

//sometimes APIs provide data in the form of array of objects
[
    {},
    {},
    {},
] 