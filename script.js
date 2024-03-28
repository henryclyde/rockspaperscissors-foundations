let userChoice = "";
let computerChoice = "";

const choices = document.querySelector("#choices");
const results = document.querySelector("#results");
const btnRock = document.createElement('button');
btnRock.textContent = "ROCK";
const btnPaper = document.createElement('button');
btnPaper.textContent = "PAPER";
const btnScissor = document.createElement('button');
btnScissor.textContent = "SCISSOR";

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
            results.textContent = "It's a tie!";
        }
        else if (computerChoice == "paper") {
            results.textContent = "You lose! Paper beats rock!";
        }
        else {
            results.textContent = "You win!, Rock beats scissors!";
        }        
    }
    else if (userChoice == "paper") {
        if (computerChoice == "paper") {
            results.textContent = "It's a tie!";
        }
        else if (computerChoice == "rock") {
            results.textContent = "You win! Paper beats rock!";
        }
        else {
            results.textContent = "You lose!, Scissors beats paper!";
        } 
    }
    else {
        if (computerChoice == "rock") {
            results.textContent = "You lose! Paper beats rock!";
        }
        else if (computerChoice == "paper") {
            results.textContent = "You win!, Scissors beats paper!";
        }
        else {
            results.textContent = "It's a tie!";
        } 
    }

}

// playRound();
