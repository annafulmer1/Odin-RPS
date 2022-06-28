"use strict";
//Variables
let computerScore = 0;
let userScore = 0;

//Function to Check Winner
const checkWinner = function () {
  if (userScore > computerScore) {
    return " User wins!";
  } else if (userScore < computerScore) {
    return "computer wins :(";
  } else {
    return "it's a tie!";
  }
};

//Play Game for Five Rounds
function game() {
  for (let i = 1; i <= 5; i++) {
    //User Input
    let playerChoice = prompt("which do you choose?", "");
    let playerSelectionFixed = playerChoice.toLowerCase();

    //Computer Player Function
    let trial = Math.trunc(Math.random() * 3) + 1;
    let computerResult;
    let computerPlay = function (num) {
      if (trial == 1) {
        return (computerResult = "rock");
      } else if (trial == 2) {
        return (computerResult = "paper");
      } else {
        return (computerResult = "scissors");
      }
    };
    computerPlay();

    //Double check outputs
    console.log(
      `I pick ${playerSelectionFixed} + computer picks ${computerResult}`
    );

    //Play a single Round Game vs Computer
    let singleRound = function (playerSelection, computerSelection) {
      if (playerSelection == computerSelection) {
        return "It's a Draw!";
      } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose!";
      } else if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore++;
        return "You win!";
      } else if (
        playerSelection == "paper" &&
        computerSelection == "scissors"
      ) {
        computerScore++;
        return "You lose!";
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        userScore++;
        return "You win!";
      } else if (
        playerSelection == "scissors" &&
        computerSelection == "paper"
      ) {
        userScore++;
        return "You win!";
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose!";
      } else {
        return "not a valid selection";
      }
    };
    singleRound(playerSelectionFixed, computerResult);
    //Console Output
    console.log(
      `Round ${i} of 5.  Your score is ${userScore} and the computer score is ${computerScore}!`
    );
  }
}
game();
console.log(checkWinner());
