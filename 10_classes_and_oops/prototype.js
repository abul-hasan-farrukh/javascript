let myName = "Hasan      ";

console.log(myName.trueLength);

let myArray = ["Shaktiman", "Iron"];

let heroPowers = {
    Shaktiman: "spin",
    Iron: "laser",

    getShaktimanPower : function(){
        console.log(`Shaktiman power is ${this.Shaktiman}`);
    }
}

Object.prototype.hasan = function(){
    console.log(`Hasan is present in all the objects`);
    
}  //Factory function is a by default function which is used to create a prototype. For ex: create.

Array.prototype.hiHasan = function(){
    console.log(`Hasan saying hello!!!`);
}

heroPowers.hasan();
myArray.hasan();
myArray.hiHasan();
//heroPowers.hiHasan();

//Inheritance 
//Each and every object has it's own instance.

const user = {
    name: "Hasan",
    email: "hasan@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport //this allows TASupport object to use all the properties of teachingSupport object.  
}

teacher.__proto__ = user //this allows teacher object to use all the properties of user object.

//Modern Sytanx for Inheritance 
Object.setPrototypeOf(teachingSupport, teacher) //this allows teachingSupport object to use all the properties of teacher object. This is called prototyple inheritance.

let userTwo = "Farrukh    ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`); //this line is obsolete it won't print anything.
    console.log(`True length is: ${this.trim().length}`);
}

userTwo.trueLength();   
"hasan".trueLength();
"coffee".trueLength();