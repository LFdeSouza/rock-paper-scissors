//Create a function that returns computer selection
function computerSelection() {
  const random = Math.random() * 3;
  if (random < 1) {
    return "rock";
  } else if (random < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
//function that takes player selection (use prompt)
function playerSelection() {
  const userChoice = window.prompt("Please enter your choice: ").toLowerCase();

  return userChoice;
}

//function plays a single round
function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return "win";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "lose";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return "win";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "lose";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return "win";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "lose";
  }
}

function game() {
  let wins = 0,
    loses = 0,
    ties = 0;
  counter = 0;
  while (counter < 5) {
    counter += 1;
    const computerChoice = computerSelection();
    const userChoice = playerSelection();
    const result = playRound(userChoice, computerChoice);
    if (result === "win") {
      wins += 1;
      console.log("You win!");
    } else if (result === "lose") {
      loses += 1;
      console.log("You lose!");
    } else if (result === "tie") {
      ties += 1;
      console.log("Tie!");
    }
  }
  if (wins > loses) {
    console.log("Player wins the game!");
  } else if (loses > wins) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a Tie!");
  }
}
game();
//function game that plays 5 rounds
