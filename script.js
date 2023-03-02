// console.log('Hello World');
// 1. A function that will randomly return either, 'Rock', 'Paper', or 'Scissors'
// 2. A function that will play a single round of Rock Paper Scissors
//    - it'll take two parameters, playerSelection and computerSelection
//    - it'll return a string that declares the winner of the round ex. 'You Lose! Paper beats Rock'
//    - playerSelection parameter must be case-sensitive
//    - I want to return the results of this function call
// 3. A function called game() 
//    - calls the playRound function inside of it
//    - plays a 5 round game that keeps score and reports a winner or loser at the end
//    - use a for loop
//    - use prompt() to get input from the user
//    - use console.log() to display the results of each round and the winner at the end
// *may need to re-work previous functions if I need to; specifically change the return value to something more useful
// *feel free to create more 'helper' functions

// function playRound(playerSelection, computerSelection) {

// }

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// for (let i = 0; i < 5; i++) {

// }

function getComputerChoice() {
    const Array = ['ROCK', 'PAPER', 'SCISSOR'];
    const randomIndex = Math.floor(Math.random() * Array.length);
    const compSelection = Array[randomIndex]
    return compSelection;
}


function getPlayerChoice() {
    const unformattedPlayerChoice = prompt('Choose ROCK, PAPER, or SCISSOR: ');
    userSelection = unformattedPlayerChoice.toUpperCase();
    return userSelection;
}


function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection === 'ROCK') {

        if (computerSelection === 'ROCK') {
            console.log('Tie! Rock ties with Rock');
            return 'tie';

        } else if (computerSelection === 'PAPER') {
            console.log('You Lose! Paper beats Rock');
            return 'computer +1';

        } else {
            console.log('You Win! Rock beats Scissor');
            return 'player +1';
        } 
        
    } else if (playerSelection === 'PAPER') {

        if (computerSelection === 'ROCK') {
            console.log('You Win! Paper beats Rock');
            return 'player +1';

        } else if (computerSelection === 'PAPER') {
            console.log('Tie! Paper ties with Paper');
            return 'tie';

        } else {
            console.log('You Lose! Scissor beats Paper');
            return 'computer +1';
        } 
        
    } else {

        if (computerSelection === 'ROCK') {
            console.log('You Lose! Rock beats Scissor');
            return 'computer +1';

        } else if (computerSelection === 'PAPER') {
            console.log('You Win! Scissor beats Paper');
            return 'player +1';
            
        } else {
            console.log('Tie! Scissor ties with Scissor');
            return 'tie';
        } 
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {

    for (let i = 0; i < 5; i++) { 
        let roundResult = playRound();
        console.log(roundResult);
        if (roundResult === 'computer +1') {
            computerScore += 1;   
            computerScoreString = computerScore.toString();
            console.log("Computer's Score is now " + computerScoreString + ".");
        } else if (roundResult === 'player +1') {
            playerScore += 1; 
            playerScoreString = playerScore.toString();
            console.log("Player's Score is now " + playerScoreString+ ".");
        } else {
            console.log('No change in scores.');
        }               
    }

    if (playerScore === computerScore) {
        console.log('THE GAME IS TIED!!!');
    } else if (playerScore > computerScore) {
        console.log('YOU WIN THE GAME!!!');
    } else {
        console.log('You LOSE THE GAME!!!');
    }
}
game();