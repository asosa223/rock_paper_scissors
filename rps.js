/**
 * Rock Paper Scissors
 * 
 * Author: Alec Sosa
 * Date: 6/15/22
 * 
 * Filename: rps.js
 */

//Store score 
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let rounds = 1;

function play() {
    const pInput = document.querySelector('#pInput');
    const cInput = document.querySelector('#cInput');
    const round = document.querySelector('.round');

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const compOptions = ['Rock', 'Paper', 'Scissors'];

    //Add click event for each button option
    playerOptions.forEach(option => {
        option.addEventListener('click', function(){
            const choiceNum = Math.floor(Math.random() * 3);
            const compChoice = compOptions[choiceNum];

            round.textContent = `Round: ${rounds}`;
            pInput.textContent = this.innerText;
            cInput.textContent = compChoice;

            playRound(this.innerText.toLowerCase(), compChoice.toLowerCase());
            rounds++;
            displayScore();

            //Once 5 rounds played, buttons are disabled
            if (rounds == 6){
                playerOptions.forEach(option => {option.disabled = true;})

                //Adds click event to refresh game
                round.innerText = 'Click here to restart game';
                round.addEventListener('click', () => {
                    window.location.reload();
                })
            }
        });
    });
 
}

//function will compare the choice of player and the computer and decide the winner
function playRound(player, computer) {
    const results = document.querySelector('#result');
    //if player and computer match, its a tie
    if (player === computer) {
        tie++;
        results.innerText = 'A tie!'
    }
    //if paper vs rock, paper wins
    else if (player === 'paper') {
        if (computer === 'rock') {
            playerScore++;
            results.innerText = 'You Win! Paper beats Rock!';
        } else {
            computerScore++;
            results.innerText =  'You lose. Scissors beats Paper';
        }
    }
    //if rock vs scissors, rock wins
    else if (player === 'rock') {
        if (computer === 'scissors') {
            playerScore++;
            results.innerText = 'You Win! Rock beats Scissors!';
        } else {
            computerScore++;
            results.innerText = 'You lose. Paper beats Rock.';
        }
    }
    //if scissors vs paper, scissors wins
    else if (player === 'scissors') {
        if (computer === 'paper') {
            playerScore++;
            results.innerText = 'You Win! Scissors beats Paper!';
        } else {
            computerScore++;
            results.innerText = 'You lose. Rock beats Scissors.';
        }
    } else {
        results.innerText = 'Invalid selection.';
    }
   displayResults();
}

function displayScore() {
    const pScore = document.querySelector('#pScore');
    const cScore = document.querySelector('#cScore');

    pScore.innerText = `Score: ${playerScore}`;
    cScore.innerText = `Score: ${computerScore}`;

}

function displayResults() {
    const results = document.querySelector('#result');
    
    if(rounds == 5){
        if (playerScore === computerScore){results.innerText = `YOU TIED!`;}
        else if (playerScore > computerScore){results.innerText = `YOU WIN!`;}
        else {results.innerText = `YOU LOSE.`;}
    }
}

play();





