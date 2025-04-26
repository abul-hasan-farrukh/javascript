//for-in loop

const myObject = {
    js : "javascript",
    py : "python",
    cpp : "C++",
    rb : "ruby"
}

for (const key in myObject) {
    console.log(`${key} stands for ${myObject[key]}`);    
}

const programming = ["js", "cpp", "java", "python"]

for (const key in programming) {
   console.log(key, ":-", programming[key]);   
}

