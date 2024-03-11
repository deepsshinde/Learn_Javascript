//calling the same functions 5 times using for loop
//functions

function myFunctions(){
  console.log("Hello World")
}

for(let i = 0; i<5; i++){
myFunctions()
}


//gettig input from user to print the desired message

function myFunctions(msg){
  
  console.log(msg)
}
myFunctions(prompt("enter any value"))

//caluculating sum of 2 numbers

function sum( x, y)
{
 s = x + y
  return s
}

let val = sum( 90, 8)
console.log(val)


