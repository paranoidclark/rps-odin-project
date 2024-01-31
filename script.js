function getComputerChoice() {

    // Get a random number from 1 to 3
    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) {
        return "Rock"
    } else if (random == 2) {
        return "Scissors"
    } else {
        return "Paper"
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")
    ) {
        console.log("You Won!")
    } else {
        console.log("You Lose!");
    }
}

function playGame() {

    let rounds = 0;

    while (rounds < 5) {
        console.log(`The Computer chose ${computerSelection}`);
        console.log(`You chose ${playerSelection}`);
        console.log((playRound(playerSelection, computerSelection)));
        rounds++;
    }
}

let playerScore = 0;
let computerScore = 0;

const playerSelection = prompt("Rock, Paper, Scissors?");
const computerSelection = getComputerChoice();

playGame();


