let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
 return Math.floor(Math.random() * 9);
};

let compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDifference = Math.abs(humanGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber); 
  if(humanDifference <= computerDifference) {
    return true
  } else if(computerDifference < humanDifference) {
    return false
  }}

let updateScore = (string) => {
  if(string === 'human') {
    humanScore += 1;
  } else if(string === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}


