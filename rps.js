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

console.log(computerPlay());