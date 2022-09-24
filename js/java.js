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



console.log(playerSelection);
console.log(computerSelection);


};

playRound();