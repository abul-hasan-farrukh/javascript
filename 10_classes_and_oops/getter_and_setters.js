//Every property or variables or key of an object or class has a get and set method.

class User {
    constructor(email, password){ //this constructor and the set method are setting value together so it will throw a call stack executed error.
        this.email = email;
        this.password = password;
    }

    get email(){
            return this._email.toUpperCase();
    }

    //we never use return keyword in set()
    set email(value){
        this._email = value;
    }

    // It is required to declare getter and setter together.
    get password(){
        return `${this._password.toUpperCase()}1234` //to avoid "call stack exceeded" error we will overwrite the value of password using a new variable _password.
    }

    //we never use return keyword in set()
    set password(value){
        this._password = value.toUpperCase(); //to avoid "call stack exceeded" error we will overwrite the value of password using a new variable _password.
    }
}

const Hasan = new User("hasan@gmail.com", "ancd")
console.log(Hasan.password);    
console.log(Hasan.email);    
