//for-each loop

//for each loop doesn't return any value. 

const coding = ["java", "ruby", "python"]

// coding.forEach( function (item) {
//     console.log(item);    
// } )

// coding.forEach( (item) => {
//     console.log(item);    
// } )

function printMe(item) {
    console.log(item);   
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);    
})

const mycoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },

    {
        languageName: "Java",
        languageFile: "java"
    },

    {
        languageName: "Python",
        languageFile: "py"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageFile);    
})