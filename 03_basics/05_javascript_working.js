//How JavaScript Works Behind The Scene... 

//Javascript Execution Context - This defines how JS will run the file you have created

//JavaScript runs the code in two phases - 

//i) Memory Creation Phase or Creation Phase or Memory Phase - In this phase only space for variables are allocated but they are not executed
//ii) Execution Phase - In this phase execution of expressions etc take place.  

//When we give any code to JS for execution it creates a "Global Execution Context" which is refered or stored using "this" keyword.

//"Global Execution Context" of browser is different from node, bun, deno etc.

//"GEC" of browser is more important and value of "this" is window 

//There is one more context called "Functional Execution Context"  

//Whenever any function executes JS creates a box called "New Executional Context" which includes "new variable environment" + "execution thread" 

//All executin of JS happens on "thread"