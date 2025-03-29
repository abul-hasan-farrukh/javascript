// Dates

let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());

console.log(typeof date); //date is an Object

let newDate = new Date(2023, 0, 23) //months in JS starts with 0.   
console.log(newDate.toString());

let newDate1 = new Date(2023, 0, 23, 5, 3) //1/23/2023, 5:03:00 AM.
console.log(newDate1.toLocaleString());
   
let newDate2 = new Date("2023-01-16") //In this case month start with 1. This format is yyyy-dd-mm.
console.log(newDate2.toString());

let newDate3 = new Date("02-25-2022") //This format is yyyy-dd-mm. Mostly followed in India.
console.log(newDate3.toString());

let myTimestamp = Date.now(); // Timestamp is mostly used in Quiz apps, hotel bookings app. 
console.log(myTimestamp); // gives times in milliseconds from 1 Jan, 1970 as defined in JS documentation.
console.log(newDate3.getTime()); 

// NOTE: Always compare values in milliseconds  
console.log(Math.floor(Date.now()/1000));

let myfirstDate = new Date();
console.log(myfirstDate.getDate().toString());
console.log(myfirstDate.getMonth().toString());
console.log(myfirstDate.getUTCMonth());
console.log(myfirstDate.getTime());

console.log(myfirstDate.toLocaleString('default', { //works exactly as locale string but gives more customization options 
    weekday: "long",
    month: "long" 
} ));


