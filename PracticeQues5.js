//create a game start with any random number ask the user to keep guessing number until user enterns correct value


let gameNumber = 25;
let usernumber = prompt("Guess the Game Number");
while(usernumber != gameNumber){
  prompt("you enter wront number. Guess the Game Number");
}

console.log("You enter right number");
