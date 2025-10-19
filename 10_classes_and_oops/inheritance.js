// Inheritance in JavaScript

// Parent class
class user{
    constructor(username){
          this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

//Child class
class Coffee extends user{
    constructor(username, email, password){
        super(username) // "super" keyword will call the username of parent class.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const coffee = new Coffee("Hasan","hasan@qbc.com", "1234")
const masalaChai = new user("Farrukh", "farrukh@abc.com", "2345")
coffee.addCourse()
coffee.logMe()
masalaChai.logMe()

console.log(coffee === masalaChai); //false
console.log(coffee instanceof Coffee); //true
console.log(coffee instanceof user); //true
