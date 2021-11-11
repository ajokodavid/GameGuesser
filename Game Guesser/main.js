let prompt = require("prompt-sync")({ sigint: true });

let numberToGuess = Math.floor(Math.random() * 10) + 1;

let guessedNumber = false;

let score = 0;

while (!guessedNumber) {
  let userGuess = prompt("Guess a number between 1 and 10: ");

  if (userGuess === numberToGuess) {
    console.log("You are correct");
    guessedNumber = true;
    score++;

    let gameQuestion = prompt("\nDo you want to play again? (y/n) ");
    if (gameQuestion == "Y" || gameQuestion == "y") {
      continue;
    } else {
      break;
    }
  } else if (userGuess > 10 || userGuess < 1) {
    console.log("\nPlease enter a number between 1 to 10");
  } else {
    console.log(`You are wrong, try again`);
    continue;
  }
}