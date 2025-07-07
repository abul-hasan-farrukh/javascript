//reduce()

const myNums = [1, 2, 3, 4]

const mytotal = myNums.reduce(function (acc, currval) {
    console.log(`acc value is ${acc} and currval value is ${currval}`);    
    return acc + currval
}, 0) //acc will start from 0 value

const mytotalz = myNums.reduce( (acc, currval) => acc + currval, 0) //acc will start from 0 value

console.log("Total using arrow function:", mytotalz);

const shoppingCart = [
    {
        itemName: "Js",
        price: 2999
    },

    {
        itemName: "Python",
        price: 1999
    },

    {
        itemName: "Java",
        price: 3999
    },
]

const itemtotal = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
console.log("Shopping cart total: ",itemtotal);
