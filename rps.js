"use strict";
//User Player Input
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
let computerScore;
let userScore;
let singleRound = function (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a Draw!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose!";
  }
};
console.log(singleRound(playerSelectionFixed, computerResult));

let game = function () {};
