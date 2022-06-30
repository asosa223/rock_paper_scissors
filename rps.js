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
    

    return compOptions[Math.floor(Math.random() * 3)];
}

function play() {
    const pInput = document.querySelector('#pInput');
    const cInput = document.querySelector('#cInput');

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const compOptions = ['Rock', 'Paper', 'Scissors'];

    playerOptions.forEach(option => {
        option.addEventListener('click', function(){
            const choiceNum = Math.floor(Math.random() * 3);
            const compChoice = compOptions[choiceNum];

            console.log(compChoice);

            pInput.textContent = this.innerText;
            cInput.textContent = compChoice;

            console.log(playRound(this.innerText.toLowerCase(), compChoice.toLocaleLowerCase()));

        });
    });
    
}

//function will compare the choice of player and the computer and decide the winner
function playRound(player, computer) {
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
}

//Initiates 5 games of rock, paper, scissors and asks user for input
function game() {
    /*for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please input either Rock, Paper or Scissors:');
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
    }*/
    const playerSelection = userPlay();
    const computerSelection = computerPlay();

    return playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
}

function displayScore() {
    const results = document.querySelector('#result');

    console.log('You won ' + playerScore + ' rounds.');
    console.log('Computer won ' + computerScore + ' rounds.');
    console.log('You tied ' + tie + ' rounds.');
}

function displayResults() {
    const pInput = document.querySelector('#pInput');
    const cInput = document.querySelector('#cInput');
    
    pInput.textContent = play();
    cInput.textContent = computerPlay();
}

//Start game and display score
//displayResults();
//game();
//displayScore();
play();





