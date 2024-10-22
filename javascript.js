let humanChoice = "";
let computerSelection = "";
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
    result.textContent = "It's a tie!";
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    result.textContent = "You win!";
    humanScore++;
  } else {
    result.textContent = "You lose!";
    computerScore++;
  }
  // updating score every round
  score.textContent = "Your Score " + humanScore + " : " + computerScore + " Computer Score";
  // updating players choices every round
  gameChoices.textContent = computerSelection + " vs " + humanChoice;

  if (humanScore === 5 || computerScore === 5) {
    console.log("Game is Over!");
    score.textContent = " o ";
    gameChoices.textContent = " o ";
    result.textContent = "Game is Over!";
    humanScore = 0;
    computerScore = 0;
  }
}

// adding an event for buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    humanChoice = button.id;
    computerSelection = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

const scoreBoard = document.querySelector("#scoreBoard");
scoreBoard.classList.add("scoreBoard");

// adding div for displaying score
const score = document.createElement("div");
score.classList.add("scoreContent");
score.textContent = "Your Score " + humanScore + " : " + computerScore + " Computer Score";
scoreBoard.appendChild(score);

// adding div for displaying players choices
const gameChoices = document.createElement("div");
gameChoices.classList.add("gameChoices");
gameChoices.textContent = computerSelection + "vs" + humanChoice;
scoreBoard.appendChild(gameChoices);

// adding div for displaying result
const result = document.createElement("div");
result.classList.add("scoreResult");
result.textContent = "Start a game!";
scoreBoard.appendChild(result);
