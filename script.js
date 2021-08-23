// get all the items from the page
const possibleChoices = document.querySelectorAll("[data-value]");
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const scorePlayer = document.querySelector("#scorePlayer");
const scoreTies = document.querySelector("#scoreTies");
const scoreComputer = document.querySelector("#scoreComputer");
const winnerBoard = document.querySelector(".winner-board");
let userChoice = null;
let wins = 0;
let loses = 0;
let ties = 0;
let counter = 0;

//get input from user
possibleChoices.forEach((choice) =>
  choice.addEventListener("click", () => {
    userChoice = choice.dataset.value;
    if (counter <= 5) {
      playGame();
    }
  })
);

function playGame() {
  let computerChoice = getComputerChoice();
  uptdateDisplays(userChoice, computerChoice);
  let result = playRound(userChoice, computerChoice);
  updateScores(result);
  counter += 1;
}

//play round
function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    return "lose";
  }
}

// get random number for computer choice
function getComputerChoice() {
  const computerChoice = Math.random() * 3;
  if (computerChoice < 1) {
    return "rock";
  } else if (computerChoice < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//update displays
function uptdateDisplays(userChoice, computerChoice) {
  if (userChoice === "rock") {
    playerChoiceDisplay.innerHTML =
      '<img src="https://img.icons8.com/ios/100/000000/hand-rock.png"/>';
  } else if (userChoice === "paper") {
    playerChoiceDisplay.innerHTML =
      '<img src="https://img.icons8.com/ios/100/000000/hand.png" />';
  } else if (userChoice === "scissors") {
    playerChoiceDisplay.innerHTML =
      '<img src="https://img.icons8.com/ios/100/000000/hand-scissors--v1.png" />';
  }

  if (computerChoice === "rock") {
    computerChoiceDisplay.innerHTML =
      '<img src="https://img.icons8.com/ios/100/000000/hand-rock.png"/>';
  } else if (computerChoice === "paper") {
    computerChoiceDisplay.innerHTML =
      '<img src="https://img.icons8.com/ios/100/000000/hand.png" />';
  } else if (computerChoice === "scissors") {
    computerChoiceDisplay.innerHTML =
      '<img src="https://img.icons8.com/ios/100/000000/hand-scissors--v1.png" />';
  }
}

function updateScores(result) {
  if (result === "tie") {
    ties += 1;
    scoreTies.innerHTML = ties;
    winnerBoard.innerHTML = "TIE!";
  }
  if (result === "lose") {
    loses += 1;
    scoreComputer.innerHTML = loses;
    winnerBoard.innerHTML = "COMPUTER WINS!";
  }
  if (result === "win") {
    wins += 1;
    scorePlayer.innerHTML = wins;
    winnerBoard.innerHTML = "YOU WIN!";
  }
}
