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

// the below response from randomuser me API can be formatted using online JSON formatting tools for better understanding 
{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }