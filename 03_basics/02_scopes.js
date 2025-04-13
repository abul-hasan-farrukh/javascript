var c = 300 //global variable
let a = 320

if (true) { //local scope because variables are declared inside block   
    let a = 10
    const b = 20
    console.log("INNER VALUE of a", a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log("OUTER VALUE of a", a); //error because scope is inside the if only 
// console.log(b); //error because scope is inside the if only
console.log(c); //will display 30 output because of var keyword

// NOTE: The scope we check in browser(window) is different from the scope in node  

function one() {
    const username = "Hasan"

    function two() {
        const website = "youtube.com"
        console.log(username);        
    }

    // console.log(website);
    two()
    //NOTE: Inner function can access the variables of outer functions
}
one()

if (true) {
    const username="Hasan"
    if (username === "Hasan") {
         const website = "website.com"
         console.log(username + website);          
    }
    // console.log(website);    
}
// console.log(username);

// +++++++++++++ INTERESTING +++++++++++++++++

function addone(num) {
    return num + 1
}

console.log(addone(5))

console.log(addtwo(5)) 
const addtwo = function(num) { //JS variables are very powerful they can store values like functions, objects, JSON values etc. 
    return num + 2 
}  
