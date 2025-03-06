console.log("2" > 1);
console.log(1 > "2");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // output is "true" because an equality check == and comparison >=, <= work differently. Comparison convert null to a number, treating as 0. That's why null >= 0 and null > 0  is false.  

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);

// === <- Strict equality check operator, checks for value and datatype

console.log("2" === 2);


