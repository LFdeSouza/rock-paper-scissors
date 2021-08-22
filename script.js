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
console.log(computerSelection());
//function that takes player selection (use prompt)

//function plays a single round

//function game that plays 5 rounds
