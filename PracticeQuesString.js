//prompt the user to ener their full name. and generte a username for them based on the input start usrname with @, followed by their full name and ending with the fullname length.
// eg. fullname is Deepti Shinde  usernam should be @deeptishinde12



let fullname = prompt("Enter Your Name:")
console.log(fullname)
let usrname = "@" + fullname + fullname.length
console.log(usrname)
