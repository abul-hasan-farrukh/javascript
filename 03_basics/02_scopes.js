var c = 300 //global variable
let a = 320

if (true) { //local scope because variables are declared inside block   
    let a = 10
    const b = 20
    console.log("INNER VALUE of a", a);
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log("OUTER VALUE of a", a); //error because scope is inside the if only 
// console.log(b); //error because scope is inside the if only
console.log(c); //will display 30 output because of var keyword

// NOTE: The scope we check in browser(window) is different from the scope in node   