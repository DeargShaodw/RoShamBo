function getComputerChoice () {

var compChoice = [
    "Ro",
    "Sham",
    "Bo"
  ];

  var randomItem = compChoice[Math.floor(Math.random()*compChoice.length)];

}

console.log(getComputerChoice);