
const buttons = document.querySelectorAll('.button');

let results = document.querySelector('.results');

let playerScore = document.querySelector('.playerScore');
playerScore.textContent = '0';
let playerScoreVar = 0;

let computerScore = document.querySelector('.computerScore');
computerScore.textContent = '0';
let computerScoreVar = 0;

let whoWins = document.querySelector('.whoWins');


function getComputerChoice() {
    let Array = ['ROCK', 'PAPER', 'SCISSOR'];

    // 1. A function that will randomly return either, 'Rock', 'Paper', or 'Scissors'
    let randomIndex = Math.floor(Math.random() * Array.length);
    let computerSelection = Array[randomIndex];
    return computerSelection;
}


// 2. A function that will play a single round of Rock Paper Scissors
function playRound() {
    let playerSelection;
    playerSelection = this.textContent;

    computerSelection = getComputerChoice();

    // - it'll return a string that declares the winner of the round ex. 'You Lose! Paper beats Rock'
    // - I want to return the results of this function call
    if (playerSelection === 'ROCK') {

        switch (computerSelection) {
            case 'ROCK':
                results.textContent = 'Tie this Round! Rock ties with Rock.';
                break;

            case 'PAPER':
                results.textContent = 'You Lose this Round! Rock is beaten by Paper.';
                upComputerScore();
                break;
            case 'SCISSOR':
                results.textContent = 'You Win this Round! Rock beats Scissor.';
                upPlayerScore(); 
                break;  
        } 
        
    } else if (playerSelection === 'PAPER') {

        switch (computerSelection) {
            case 'ROCK':
                results.textContent = 'You Win this Round! Paper beats Rock.';
                upPlayerScore();
                break;

            case 'PAPER':
                results.textContent = 'Tie this Round! Paper ties with Paper.';
                break;

            case 'SCISSOR':
                results.textContent = 'You Lose this Round! Paper is beaten by Scissor.';
                upComputerScore();
                break;
        } 
        
    } else {

        switch (computerSelection) {
            case 'ROCK':
                results.textContent = 'You Lose this Round! Scissor is beaten by Rock.';
                upComputerScore();
                break;

            case 'PAPER':
                results.textContent = 'You Win this Round! Scissor beats Paper.';
                upPlayerScore();
                break;
            
            case 'SCISSOR':
                results.textContent = 'Tie this Round! Scissor ties with Scissor.';
                break;
        } 
    }
}


function checkScore() {
    if (computerScoreVar === 5) {
        whoWins.textContent = 'Computer Wins the Game!';
        return;

    } else if (playerScoreVar === 5) {
        whoWins.textContent = 'You Win the Game!';
        return;
    }
}


function upComputerScore() {
    computerScoreVar += 1;
    computerScore.textContent = `${computerScoreVar}`;
    checkScore();
}
function upPlayerScore() {
    playerScoreVar += 1;
    playerScore.textContent = `${playerScoreVar}`;
    checkScore();
}

buttons.forEach(button => button.addEventListener('click', playRound));