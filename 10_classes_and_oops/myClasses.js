// Below JS code is after the ES6 version.

// Classes in JavaScript.

class User {
    constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const coffee = new User("Hasan", "hasan@gmail.com", 124);
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());

//behind the scene of above code

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}def`   
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`   
}

const toffee = new user("Hasan", "hasan@gmail.com", 124);
console.log(toffee.encryptPassword());
console.log(toffee.changeUsername());