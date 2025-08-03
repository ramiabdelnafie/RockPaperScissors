function getComputerChoice() {
const rand = Math.random();
if (rand <= 0.333) {
    return "rock";
} else if (rand >=0.667) {
    return "paper";
} else {
    return "scissors";
}

}


const displayResults = document.querySelector("#display");


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            displayResults.textContent = "TIE!";
        }

        else if (humanChoice === "rock" && computerChoice === "paper") {
            displayResults.textContent = "You lose! Paper beats Rock";
            computerScore++;
        }

        else if (humanChoice === "rock" && computerChoice === "scissors") {
            displayResults.textContent = "You Win! Rock beats Scissors";
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            displayResults.textContent = "You Win! Paper beats Rock";
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            displayResults.textContent = "You Lose! Scissors beats Paper";
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            displayResults.textContent = "You Lose! Rock beats Scissors";
            computerScore++;
        }
        else if (humanChoice ==="scissors" && computerChoice === "paper") {
            displayResults.textContent = "You Win! Scissors beats Paper";
            humanScore++;
        }
    }


    const computerSelection = getComputerChoice();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");



rock.addEventListener ("click", () => {
    playRound("rock", getComputerChoice())
});


paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});


scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())});

