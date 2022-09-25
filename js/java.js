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


function playRound (playerSelection) {

  playerSelection = prompt('Rock Paper Sciscor')

  computerSelection = getComputerChoice()



console.log(playerSelection);



};

playRound();
