let userChoice = "";
let computerChoice = "";


function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3); //returns a random number, 0, 1, or 2
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

function getUserChoice() {
    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        userChoice = prompt("Do you choose rock, paper, or scissors?");
    }
    return userChoice;
}

function playRound() {
    computerChoice = getComputerChoice();
    userChoice = getUserChoice();
    if (userChoice == "rock") {
        if (computerChoice == "rock") {
            alert("It's a tie!");
        }
        if (computerChoice == "paper") {
            alert("You lose! Paper beats rock!")
        }
        else {
            alert("You win!, Rock beats scissors!")
        }        
    }
    else if (userChoice == "paper") {
        if (computerChoice == "paper") {
            alert("It's a tie!");
        }
        if (computerChoice == "Rock") {
            alert("You win! Paper beats rock!")
        }
        else {
            alert("You lose!, Scissors beats paper!")
        } 
    }
    else {
        if (computerChoice == "rock") {
            alert("You lose! Paper beats rock!")
        }
        if (computerChoice == "paper") {
            alert("You win!, Scissors beats paper!")
        }
        else {
            alert("It's a tie!");
        } 
    }

}

playRound();
