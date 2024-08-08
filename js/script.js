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
    choice = prompt(`This is round ${roundCount + 1} of 5! Make your move - Rock, Paper, or Scissors?!`).toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        alert("Seriously?! LOL! Please type 'Rock', 'Paper', or 'Scissors'.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return `The computer chose "Paper". Paper beats Rock! You lose! Score: ${humanScore} - ${computerScore}`;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return `The computer chose "Scissors". Rock beats Scissors! You win! Score: ${humanScore} - ${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        return `The computer chose "Scissors". Scissors beats Paper! You lose! Score: ${humanScore} - ${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return `The computer chose "Rock". Paper beats Rock! You win! Score: ${humanScore} - ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        return `The computer chose "Rock". Rock beats Scissors! You lose! Score: ${humanScore} - ${computerScore}`;
    }  else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return `The computer chose "Paper". Scissors beats Paper! You win! Score: ${humanScore} - ${computerScore}`;
    } else {
        return `It's a tie! Score: ${humanScore} - ${computerScore}`;
    }
}

function playGame() {
    alert("Welcome to Rock, Paper, Scissors! You will be playing a total of 5 rounds with the computer. Score format: Your Score - Computer Score. Enjoy!")
    
    alert(playRound(getHumanChoice(), getComputerChoice()));
    roundCount += 1;
    alert(playRound(getHumanChoice(), getComputerChoice()));
    roundCount += 1;
    alert(playRound(getHumanChoice(), getComputerChoice()));
    roundCount += 1;
    alert(playRound(getHumanChoice(), getComputerChoice()));
    roundCount += 1;
    alert(playRound(getHumanChoice(), getComputerChoice()));
    roundCount += 1;

    if (humanScore > computerScore) {
        alert("Congrats! You won the game! Computers are dumb machines!");
    } else if (humanScore < computerScore) {
        alert("You lost the game! Computers are smart eh?!");
    } else {
        alert("The game was a tie!");
    }
}

let humanScore, computerScore, roundCount;

humanScore = 0;
computerScore = 0;
roundCount = 0;

playGame();


