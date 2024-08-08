function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let generator;
    generator = getRandomInteger(3);
    if (generator == 0) {
        return "rock";
    } else if (generator == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());