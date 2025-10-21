//Getter and Setters using defineProperty() in functions.
//Every property or variables or key of an object or class has a get and set method.

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function (){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function (){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const Hasan = new User("hasan@gmail.com", "ancd")
console.log(Hasan.password);    
console.log(Hasan.email);