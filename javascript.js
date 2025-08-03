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

        if (humanScore >=5 || computerScore >=5) {
            return;
        };


        if (humanChoice === computerChoice) {
            displayResults.textContent = `TIE! Score - You: ${humanScore}, Computer: ${computerScore}`;
        }

        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            displayResults.textContent = `You lose! Paper beats Rock. Score - You: ${humanScore}, Computer: ${computerScore}`;
        }

        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            displayResults.textContent = `You Win! Rock beats Scissors. Score - You: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            displayResults.textContent = `You Win! Paper beats Rock. Score - You: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            displayResults.textContent = `You Lose! Scissors beats Paper. Score - You: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            displayResults.textContent = `You Lose! Rock beats Scissors. Score - You: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (humanChoice ==="scissors" && computerChoice === "paper") {
            humanScore++;
            displayResults.textContent = `You Win! Scissors beats Paper. Score - You: ${humanScore}, Computer: ${computerScore}`;
        }

        let winner = document.querySelector("#winner");

if (humanScore === 5) {
    winner.textContent = "You got to 5 first, so congrats I guess"
} else if (computerScore === 5){
    winner.textContent = "I got to 5 first, I won loser!"
}
    }


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



