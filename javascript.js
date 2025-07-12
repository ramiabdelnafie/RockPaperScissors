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