// get all the items from the page
const possibleChoices = document.querySelectorAll("[data-value]");
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const scorePlayer = document.querySelector("#scorePlayer");
const scoreTies = document.querySelector("#scoreTies");
const scoreComputer = document.querySelector("#scoreComputer");
const winnerBoard = document.querySelector(".winner-board");
const modal = document.querySelector(".modal");
const modalHeading = document.querySelector(".modal-heading");
const resetButton = document.querySelector(".modal-button");
const overlay = document.querySelector(".overlay");

let userChoice = null;
let wins = 0;
let loses = 0;
let ties = 0;
let counter = 0;

//get input from user and play game
possibleChoices.forEach((choice) =>
  choice.addEventListener("click", () => {
    counter += 1;
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
  if (counter === 5) {
    popModal();
  }
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

function popModal() {
  if (wins === loses) {
    modalHeading.textContent = "It's a Tie!";
  } else if (wins > loses) {
    modalHeading.textContent = "Player Wins!";
  } else {
    modalHeading.textContent = "Computer Wins!";
  }

  modal.classList.add("active");
  overlay.classList.add("active");
}

//Reset game
resetButton.addEventListener("click", resetGame);

function resetGame() {
  window.location.reload();
}
