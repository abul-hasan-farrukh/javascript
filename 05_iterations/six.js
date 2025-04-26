//filter in JS

const coding = ["java", "ruby", "python"]

const values = coding.forEach( (item) => {
        console.log(item);  
        return  
    } )

console.log(values);

// ---------------------------------

const myNums = [1, 2, 3, 4, 5, 6]

//filter function accepts a callback function.
const newNums = myNums.filter( (num) => num> 5 ) // here we are not declaring the condition in curly braces so it will return the value automatically.
console.log(newNums);

const newNumz = myNums.filter( (num) => {
    return num > 2 //here we are using the return keyword because we have declared the condition in {}.  
})
console.log(newNumz);

// -----------------------------------
const newArray = []

//alternate of filter method
myNums.forEach( (nums) => {
    if (nums > 3) {
        newArray.push(nums)        
    }
} )

console.log(newArray);

// ------------------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);
  

let userBookz = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
})
console.log(userBookz);


  