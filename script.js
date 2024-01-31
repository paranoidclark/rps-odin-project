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

    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You Won! Rock beats Scissors!");
        playerScore++;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You Lose! Paper beats Rock!");
        computerScore++;
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log("It's a tie!");
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You Lose! Rock beats Scissors!");
        computerScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You Won! Scissors beats Paper!");
        playerScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        console.log("It's a tie!");
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You Won! Paper beats Rock!");
        playerScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You Lose! Scissors beats Paper!");
        computerScore++;
    } else {
        console.log("It's a tie!");
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


