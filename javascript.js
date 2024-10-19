function playGame() {
  let humanChoice = prompt("Let's play a paper, scissors, rock game! What is your choice?");
  let humanScore = 0;
  let computerScore = 0;

  function getHumanChoice(b) {
    if (b === "scissors" || b === "paper" || b === "rock") {
      return b;
    } else {
      newChoice = prompt("Stop Cheating! Choose a valid option! Paper, scissors or rock!");
      return getHumanChoice(newChoice);
    }
  }

  function getComputerChoice() {
    a = Math.floor(Math.random() * 3);

    if (a === 0) {
      computerChoice = "paper";
    } else if (a === 1) {
      computerChoice = "scissors";
    } else if (a === 2) {
      computerChoice = "rock";
    }

    return computerChoice;
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors")
    ) {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("You lose!");
      computerScore++;
    }

    console.log("Your score:", humanScore);
    console.log("Computer score:", computerScore);

    if (humanScore === 5 || computerScore === 5) {
      console.log("Game is Over!");
    } else {
      let humanChoiceAgain = prompt("Let's play a paper, scissors, rock game! What is your choice?");
      const humanSelection = getHumanChoice(humanChoiceAgain);
      const computerSelection = getComputerChoice();

      console.log("Computer's choice:", computerSelection);
      console.log("Your choice:", humanSelection);

      playRound(humanSelection, computerSelection);
    }
  }

  const humanSelection = getHumanChoice(humanChoice);
  const computerSelection = getComputerChoice();

  console.log("Computer's choice:", computerSelection);
  console.log("Your choice:", humanSelection);

  playRound(humanSelection, computerSelection);
}

playGame();
