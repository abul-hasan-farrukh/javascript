// for Loop

for (let index = 0; index <= 10 ; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best");        
    }    
    console.log(element);    
}

for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Loop Value: ${i}`);    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop Value: ${j} and Outer Loop Value: ${i}`);
        console.log( i + ` * ` + j + ` = ` + i*j );
    } 
}

let myArray = ["superman", "batman", "wolfy"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
}

//break and continue 

for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log(`5 Detected`);
        break;
}
    console.log(`Value of i is ${i}`);  
}


for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log(`5 Detected`);
        continue;
}
    console.log(`Value of i is ${i}`);  
}