/**
 * Rock Paper Scissors
 * 
 * Author: Alec Sosa
 * Date: 6/15/22
 * 
 * Filename: rps.js
 */

//Store wins 
let playerScore = 0;
let computerScore = 0;
let tie = 0;

//function will select either rock, paper or scissors randomly
function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    //select random number
    let ran_Num = Math.floor(Math.random()*92);
    //if random number is between 0-29, select rock
    if (ran_Num >= 0 && ran_Num <= 29) {
        return rock;
    }
    //if random number is between 30-60, select paper
    if (ran_Num >= 30 && ran_Num <= 60) {
        return paper;
    }
    //if random number is between 61-91, select scissors
    if (ran_Num >= 61 && ran_Num <= 91) {
        return scissors;
    }
    //return result
}

//function will compare the choice of player and the computer and decide the winner
/*function playRound(player, computer) {
    //if player and computer match, its a tie
    if (player === computer) {
        tie++;
        return 'A tie!'
    }
    //if paper vs rock, paper wins
    else if (player === 'paper') {
        if (computer === 'rock') {
            playerScore++;
            return 'You Win! Paper beats Rock!';
        } else {
            computerScore++;
            return 'You lose. Scissors beats Paper';
        }
    }
    //if rock vs scissors, rock wins
    else if (player === 'rock') {
        if (computer === 'scissors') {
            playerScore++;
            return 'You Win! Rock beats Scissors!';
        } else {
            computerScore++;
            return 'You lose. Paper beats Rock.';
        }
    }
    //if scissors vs paper, scissors wins
    else if (player === 'scissors') {
        if (computer === 'paper') {
            playerScore++;
            return 'You Win! Scissors beats Paper!';
        } else {
            computerScore++;
            return 'You lose. Rock beats Scissors.';
        }
    } else {
        return 'Invalid selection.';
    }
}*/

//Initiates 5 games of rock, paper, scissors and asks user for input
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please input either Rock, Paper or Scissors:');
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
    }
}

function displayScore() {
    console.log('You won ' + playerScore + ' rounds.');
    console.log('Computer won ' + computerScore + ' rounds.');
    console.log('You tied ' + tie + ' rounds.');
}

//Start game and display score
//game();
//displayScore();

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result.textContent = button.id;
    });

});

