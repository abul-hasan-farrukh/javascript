//Every property or variables or key of an object or class has a get and set method.

const User = {
    _email: 'hasan@sab.com',
    _password: "mnc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this.email = value
    }
}

const coffee = Object.create(User)
console.log(coffee._email);
