/**
 * Rock Paper Scissors
 * 
 * Author: Alec Sosa
 * Date: 6/15/22
 * 
 * Filename: rps.js
 */

//function will select either rock, paper or scissors
function computerPlay() {
    //initilize rock
    let rock = "Rock";
    //initilize paper
    let paper = "Paper";
    //initilize scissors
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
function playRound(player, computer) {              //**TO ALEC: ADD CASE SENSITIVITY WHEN YOU RETURN NEXT*/
    //if player and computer match, its a tie
    if (player === computer) {
        return 'A tie!'
    }
    //if paper vs rock, paper wins
    else if (player === 'paper') {
        if (computer === 'rock') {
            return 'You Win! Paper beats Rock!';
        }
        else {
            return 'You lose. Scissors beats Paper';
        }
    }
    //if rock vs scissors, rock wins
    else if (player === 'rock') {
        if (computer === 'scissors') {
            return 'You Win! Rock beats Scissors!';
        }
        else {
            return 'You lose. Paper beats Rock.';
        }
    }    
    //if scissors vs paper, scissors wins
    else if (player === 'scissors') {
        if (computer === 'paper') {
            return 'You Win! Scissors beats Paper!';
        }
        else {
            return 'You lose. Rock beats Scissors.';
        }
    }
    else {
        return 'Invalid selection.';
    }
}

const playerSelection = 'scissors';
const computerSelection = 'scissors';

console.log(playRound(playerSelection, computerSelection));