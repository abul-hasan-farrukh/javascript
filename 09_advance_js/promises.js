//Promise is an object that represents eventual completion or failure of an asynchronous operation.
//It has three states: Pending, Fulfilled, Rejected.


//Promises are created but mostly we consume promises.
//Until and unless you learn to create promises you will never understand what promise is in JS.

//In this file we will create different types of promises.
//"new" keyword will give you an instance of an object.
//Promise() method accepts a callback and it also helps to reduce the callback hell i.e callback inside a callback.

const promise1 = new Promise(function (resolve, reject) {
    //Async tasks here.
    //Examples include DB calls, cryptography, network calls
    setTimeout(function () {
        console.log('Async task completed');
        resolve() // resolve() method builds the connection with then() method. We can pass parameters(values) in resolve() which are mostly in the form of an object.  
    }, 1000)
})

//Consuming promise using the then() below.
// .then() has connection with "resolve" parameter declared above.
// .then() accepts a callback i.e. a function inside which automatically accepts a argument and returns a value.

promise1.then(function () {
    console.log("Promise has been consumed");
})


//Creating 2nd promise without using a variable.
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promise 2 Consumed");
})

//Creating 3rd promise without using a variable.
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Hasan", email: "abulhasanfarrukh@gmail.com" })
    }, 1000)
})

promise3.then(function (user) {
    console.log(user);
})


//Creating 4th Promise
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ user_name: "Hasan" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//Performing chaining here. It is very important for database connection.
promise4
    .then(function (user) {
        console.log(user);
        return user.user_name;
    })
    .then((user_name) => {
        console.log(user_name);
    })
    .catch(function (error) { //catch() accepts a function (i.e. callback) which accepts a parameter (we can name it error, err etc.)
        console.log(error);
    })
    .finally(() => {
        console.log("Your promise has either been resloved or rejected");
    })


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ user_name: "Hasan Bhai" })
        }
        else {
            reject('ERROR: Everything went wrong')
        }
    }, 1000)
})

//async and await cannot handle errors directly.
async function consumePromise5() {
    try {
        const response = await promise5
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromise5() //calling the function

//Handling JSON data using async await.
/* async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/abul-hasan-farrukh')
    const data = await response.json() //it takes time for response to be converted in JSON so we will use "await" here.  
    console.log(data);
    } catch (error) {
        console.log("ERR;" , error);
        
    }
}
getAllUsers(); */



//fetch() is divided in two parts.

//1st is Web Browser to handle Web Browser API or Node requests. It sends a network request which we pass as a URL of an API.
//If the requests is successfull (for example a 404 error) then it goes in onFullfilled[] array otherwise in onRejection[] array. 

//2nd is Data to be stored in variables and memory. 
//It contains arrays like onFulfilled[] for resolve and onRejection[] for reject. These arrays can't be accessed directly because they are private so we can't push values in them.  

//After running this file file, you will notice that the fetch() method is getting executed first then other methods declared above are executed in the terminal.
//This happens because fetch() creates its own special queue known as Micro Task Queue or Priority Queue which is very fast in terms of execution of the tasks.

fetch("https://api.github.com/users/abul-hasan-farrukh")
.then((response) => {
    return response.json()
})
.then((data) => {console.log(data);
})
.catch((error) => {console.log(error);
})