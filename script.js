let userChoice = "";
let computerChoice = "";

const choices = document.querySelector("#choices");
const results = document.querySelector("#results");
const resultsP = document.createElement('p');

const btnRock = document.createElement('button');
btnRock.textContent = "ROCK";
const btnPaper = document.createElement('button');
btnPaper.textContent = "PAPER";
const btnScissor = document.createElement('button');
btnScissor.textContent = "SCISSOR";

const score = document.createElement('div');
const scoreHead = document.createElement('h3');
const scoreNumber = document.createElement('p');

let userScore = 0;
let computerScore = 0;


scoreHead.textContent = "Scoreboard";
score.appendChild(scoreHead);
score.appendChild(scoreNumber);
results.appendChild(resultsP);
results.appendChild(score);




btnRock.addEventListener("click", () => {
    userChoice = "rock";
    playRound();
});
btnPaper.addEventListener("click", () => {
    userChoice = "paper";
    playRound();
});
btnScissor.addEventListener("click", () => {
    userChoice = "scissor";
    playRound();
});

choices.appendChild(btnRock);
choices.appendChild(btnPaper);
choices.appendChild(btnScissor);

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3); //returns a random number, 0, 1, or 2
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}


function playRound() {
    computerChoice = getComputerChoice();
    if (userChoice == "rock") {
        if (computerChoice == "rock") {
            resultsP.textContent = "It's a tie!";
        }
        else if (computerChoice == "paper") {
            resultsP.textContent = "You lose! Paper beats rock!";
            computerScore++;
        }
        else {
            resultsP.textContent = "You win!, Rock beats scissors!";
            userScore++;
        }        
    }
    else if (userChoice == "paper") {
        if (computerChoice == "paper") {
            resultsP.textContent = "It's a tie!";
        }
        else if (computerChoice == "rock") {
            resultsP.textContent = "You win! Paper beats rock!";
            userScore++;
        }
        else {
            resultsP.textContent = "You lose!, Scissors beats paper!";
            computerScore++;
        } 
    }
    else {
        if (computerChoice == "rock") {
            resultsP.textContent = "You lose! Paper beats rock!";
            computerScore++;
        }
        else if (computerChoice == "paper") {
            resultsP.textContent = "You win!, Scissors beats paper!";
            userScore++;
        }
        else {
            resultsP.textContent = "It's a tie!";
        } 
    }
    
    if(userScore == 5) {
        scoreNumber.textContent = "You are the winner!";
        computerScore = 0;
        userScore = 0;
    }
    else if(computerScore == 5) {
        scoreNumber.textContent = "You are the winner!";
        userScore = 0;
        computerScore = 0;        
    } else {
        scoreNumber.textContent = `You: ${userScore} Computer: ${computerScore}`;

    }
}

// playRound();
