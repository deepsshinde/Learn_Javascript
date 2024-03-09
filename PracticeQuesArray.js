                     
ARRAY PRACTICE QUESTIONS:

//create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. remove the first company from the array.
// B remove Uber and add Ola in its place
// c.Add Amazon at the End


let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
arr.shift() //a
console.log(arr)
let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]                      
arr.splice(2, 1, "Ola") //b  
console.log(arr)
let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
arr.push("Amazon")  //c
 console.log(arr)                     

