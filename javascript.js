function getComputerChoice() {

if (Math.random() <= 0.333) {
    return "rock";
} else if (Math.random() >=0.667) {
    return "paper";
} else {
    return "scissors";
}

}

console.log(getComputerChoice)


function getHumanChoice() {

return prompt("Please enter rock, paper, or scissors.")

}

console.log(getHumanChoice)




    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("TIE!");
        }

        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }

        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You Win! Paper beats Rock");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }
        else {
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        }
    }

    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
//     function playGame() {

//         for (let i=0; i<5; i++) {
//             const humanSelection = getHumanChoice();
//             const computerSelection = getComputerChoice();
//             playRound(humanSelection, computerSelection);

//             console.log('Current Score:', 'You =',humanScore, ', Computer =', computerScore);
//         }
       
//         console.log("Game Over");
//         console.log('Final Score:', 'Human =', humanScore, 'Computer =', computerScore);

//       if (humanScore>computerScore) {
//         console.log("I Guess You Win :(");
//       }  else if (humanScore<computerScore) {
//         console.log("I Win Yay!!");
//       } else {
//         console.log("We Tied!");
//       }
// }
// playGame();
