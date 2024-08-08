function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    switch (getRandomInteger(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

console.log(getHumanChoice());