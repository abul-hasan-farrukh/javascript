// Static properties in JavaScript

class User{
    constructor(username){
            this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createID(){ //the "static" keyword will prevent the createID() method to be accessible from other objects instantiated from User class
        return `123`
    }
}

const Candidate = new User("Hasan");
//console.log(Candidate.createID());

class Child extends User {
    constructor(username, email){
        super(username)
        this.email = email; 
    }
}

const phone = new Child("hasan", "hasan@123.com")
phone.logMe(); 
console.log(phone.createID());  //will return error because createID function is static, it can't be accessed from other objects of outside classes.
