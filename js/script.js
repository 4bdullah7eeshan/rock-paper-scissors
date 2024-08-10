function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    humanScoreBox.textContent = `${humanScore}`;
    computerScoreBox.textContent = `${computerScore}`;
    roundTracker.textContent = `Round Counter: ${roundCount}`;
    gameInstructions.textContent = "Start Game";
    gameStatus.textContent = "Make your move!";
}

function getGameStatus(humanScore, computerScore) {
    if (humanScore == 5) {
        // The alert box now is not displayed before the updating the game screen
        setTimeout(() => {
            alert("Congrats! You won the game! Computers are dumb machines!");
            resetGame();
        }, 100); // delay for 100ms
    } else if (computerScore == 5) {
        setTimeout(() => {
            alert("You lost the game! Computers are smart eh?!");
            resetGame();
        }, 100); // delay for 100ms
    }

}

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

function playRound(humanChoice, computerChoice) {
    roundCount += 1;
    roundTracker.textContent = `Round Counter: ${roundCount}`;
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        gameInstructions.textContent = "You lose!";
        gameStatus.textContent = `The computer chose "Paper". "Paper" beats "Rock"!`;
        computerScoreBox.textContent = `${computerScore}`;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        gameInstructions.textContent = "You win!";
        gameStatus.textContent = `The computer chose "Scissors". "Rock" beats "Scissors"!`;
        humanScoreBox.textContent = `${humanScore}`;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        gameInstructions.textContent = "You lose!";
        gameStatus.textContent = `The computer chose "Scissors". "Scissors" beats "Paper"!`;
        computerScoreBox.textContent = `${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        gameInstructions.textContent = "You win!";
        gameStatus.textContent = `The computer chose "Rock". "Paper" beats "Rock"!`;
        humanScoreBox.textContent = `${humanScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        gameInstructions.textContent = "You lose!";
        gameStatus.textContent = `The computer chose "Rock". "Rock" beats "Scissors"!`;
        computerScoreBox.textContent = `${computerScore}`;
    }  else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        gameInstructions.textContent = "You win!";
        gameStatus.textContent = `The computer chose "Paper". "Scissors" beats "Paper"!`;
        humanScoreBox.textContent = `${humanScore}`;
    } else {
        gameInstructions.textContent = "It's a tie!";
        gameStatus.textContent = `The computer chose the same thing!`;
    }
    getGameStatus(humanScore, computerScore);
}


let humanScore, computerScore, roundCount;

humanScore = 0;
computerScore = 0;
roundCount = 0;

const gameSection = document.createElement("div");
gameSection.setAttribute("id", "game-section");

const gameTitle = document.createElement("h1");
gameTitle.textContent = "~ Rock Paper Scissors ~";

gameSection.appendChild(gameTitle);

const gameDescription = document.createElement("p");
gameDescription.textContent = "You will play a series of rounds with the computer. First to score 5 points wins the game.";

gameSection.appendChild(gameDescription);

const gameScoreSection = document.createElement("div");
gameScoreSection.id = "game-score-section";

const gameScoreSectionHeading = document.createElement("h3");
gameScoreSectionHeading.textContent = "Score";

gameScoreSection.appendChild(gameScoreSectionHeading);

const gameScoreArea = document.createElement("div");
gameScoreArea.id = "game-score-area";

const humanArea = document.createElement("div");
humanArea.id = "human-area";

const humanAreaTitle = document.createElement("h4");
humanAreaTitle.setAttribute("class", "human");
humanAreaTitle.textContent = "Human";

humanArea.appendChild(humanAreaTitle);

const humanScoreBox = document.createElement("div");
humanScoreBox.setAttribute("class", "score-box");
humanScoreBox.textContent = `${humanScore}`;

humanArea.appendChild(humanScoreBox);

gameScoreArea.appendChild(humanArea);

const computerArea = document.createElement("div");
computerArea.id = "computer-area";

const computerAreaTitle = document.createElement("h4");
computerAreaTitle.setAttribute("class", "computer");
computerAreaTitle.textContent = "Computer";

computerArea.appendChild(computerAreaTitle);

const computerScoreBox = document.createElement("div");
computerScoreBox.setAttribute("class", "score-box");
computerScoreBox.textContent = `${computerScore}`;

computerArea.appendChild(computerScoreBox);

gameScoreArea.appendChild(computerArea);

gameScoreSection.appendChild(gameScoreArea);

gameSection.appendChild(gameScoreSection);

const gameInstructions = document.createElement("h3");
gameInstructions.textContent = "Start Game";

const gameStatus = document.createElement("h4");
gameStatus.textContent = "Make your move:";

gameSection.appendChild(gameInstructions);
gameSection.appendChild(gameStatus);

const gameButtons = document.createElement("div");
gameButtons.setAttribute("id", "game-buttons");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.setAttribute("id", "rock");
paperButton.setAttribute("id", "paper");
scissorsButton.setAttribute("id", "scissors");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});


gameButtons.appendChild(rockButton);
gameButtons.appendChild(paperButton);
gameButtons.appendChild(scissorsButton);

gameSection.appendChild(gameButtons);

const roundTracker = document.createElement("h4");
roundTracker.textContent = `Round Counter: ${roundCount}`;

gameSection.appendChild(roundTracker);

const gameResetButton = document.createElement("button");
gameResetButton.id = "reset-button";
gameResetButton.textContent = "Reset";
gameResetButton.addEventListener("click", function() {
    resetGame();
});
gameSection.appendChild(gameResetButton);

document.body.appendChild(gameSection);


const footer = document.createElement("div");
footer.setAttribute("id", "footer");
const footerText = document.createElement("p");
footerText.setAttribute("class", "footer-text");
footerText.textContent = "Copyright © Abdullah Zeeshan 2024"
footer.appendChild(footerText);

const footerLink = document.createElement("a");
footerLink.href = "https://github.com/4bdullah7eeshan/rock-paper-scissors";
footerLink.target = "_blank";
footerLink.rel = "noopener noreferrer";

const githubLogo = document.createElement("i");
githubLogo.setAttribute("class", "fab fa-github");

footerLink.appendChild(githubLogo);

footer.appendChild(footerLink);

document.body.appendChild(footer);