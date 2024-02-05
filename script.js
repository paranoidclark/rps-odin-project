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
    const playerChose = document.querySelector('.playerChose');
    const computerChose = document.querySelector('.computerChose');
    const results = document.querySelector('.results');

    playerChose.textContent = `You chose: ${playerSelection}`
    computerChose.textContent = `Computer chose: ${computerSelection}`

    if (playerSelection == computerSelection) {
        results.textContent = "It's a tie!"
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")
    ) {
        results.textContent = "You Won!"
        playerScore++;
        playerShow.textContent = `Player Score: ${playerScore}`;
        checkWinner();
    } else {
        results.textContent = "You Lose!"
        computerScore++;
        computerShow.textContent = `Computer Score: ${computerScore}`;
        checkWinner();
    }
}

const btn = document.querySelectorAll('.btn');
const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const playerShow = document.querySelector('.playerScore')
const computerShow = document.querySelector('.computerScore')

let playerScore = 0;
let computerScore = 0;

function checkWinner() {

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            h1.textContent = "You Won against the Computer! Congratulations!"
        } else {
            h1.textContent = "You lost against the Computer. Better luck next time."
        }
    }
}


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => playRound(btn[i].value, getComputerChoice()))
}










