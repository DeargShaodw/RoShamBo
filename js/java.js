function getComputerChoice () {

  var myGame = [
    "Rock",
    "Paper",
    "Sciscor"
  ];
  
  var randomItem = myGame[Math.floor(Math.random()*myGame.length)];
  
  console.log(randomItem);


};

// getComputerChoice();


function playRound () {

  let playerSelection = prompt('Rock Paper Sciscor');

  let computerSelection = getComputerChoice();


if  (playerSelection === computerSelection ) {
  computerSelection = getComputerChoice().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    displayResults("Tie game!");
}

// else {
//   console.log("words")
// }

console.log(playerSelection);
console.log(randomItem);


};


};

playRound();