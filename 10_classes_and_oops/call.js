function setUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this, username) //the "call" will actually call the function and holds its reference. And the "this" keyword before username tell the function to use the current context.
    this.email = email;
    this.password = password;
}

const tea = new createUser("Hasan", "hasan@gmail.com", "123") 
console.log(tea); //this will only print email and password
