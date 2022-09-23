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


function runGame () {

let playerSelection = prompt('Rock Paper Sciscor');

let computerSelection = getComputerChoice();

if  (playerSelection === computerSelection ) {
  System.out.println("Draw");
}

// else {
//   System.out.println("Words")
// }

console.log(playerSelection);

};

runGame();