"use strict";

//generate a function called computerPlay that will randomly return rock paper scissors
const trial = Math.trunc(Math.random() * 3) + 1;
console.log(trial);

let computerPlay = function (num) {
  if (trial == 1) {
    return "rock";
  } else if (trial == 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
console.log(computerPlay());

//have user input either rock paper or scissors (check for case sensitivity)
const playerChoice = prompt("which do you choose?", "");
const playerSelectionFixed = playerChoice.toLowerCase();
console.log(playerSelectionFixed);
//check to see if the computer or the user wins
let oneRound = function (playerSelectionFixed, computerPlay) {
  //rock logic
  if (playerSelectionFixed == "rock" && computerPlay == "rock") {
    return "It's a draw! Play Again!";
  } else if (playerSelectionFixed == "rock" && computerPlay == "paper") {
    return "Paper beats rock! You win!";
  } else if (playerSelectionFixed == "rock" && computerPlay == "scissors") {
    return "You lose! Rock beats Scissors!";
  }
};
//something goofy here
console.log(oneRound(playerSelectionFixed, computerPlay));

//display who won with a statement

//create game with loop
