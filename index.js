// Rock paper scissors game. Needs to take two inputs, one from the computer and one from the user.
    // Create a function that takes the computer's input
    // Computer input has to be completely random
    // Create player input function 
    // Create a function that does one round of RPS

// Rock > Scissors | Scissors > Paper | Paper > Rock | Everything else is a draw



function getComputerChoice() {
    let randomInput = Math.floor(Math.random() * 3 + 1);

    switch (randomInput) {
        case 1:
           randomInput = 'rock';
           break; 
        case 2: 
            randomInput = 'paper'
            break;
        case 3: 
            randomInput = 'scissors'
            break;    
    }
    return randomInput;
}

const playerSelection = 'scissors';
const computerSelection = getComputerChoice();

console.log(computerSelection)
console.log(playerSelection);

function playRound(getPlayerSelection, getComputerSelection) {
    let message; 
    if (getPlayerSelection === 'rock' && getComputerSelection === 'scissors') {
        message = 'You win this round, rock beats scissors.'
    } else if (getPlayerSelection === 'paper' && getComputerSelection === 'rock') {
        message = 'You win this round, paper beats rock.'
    } else if (getPlayerSelection === 'scissors' && getComputerSelection === 'paper') {
        message = 'You win this round, scissors beats paper.'
    } else if (getPlayerSelection === 'rock' && getComputerSelection === 'paper') {
        message = 'You Lose this round, paper beats rock.'
    } else if (getPlayerSelection === 'paper' && getComputerSelection === 'scissors') {
        message = 'You lose this round, scissors beats paper.'
    } else if (getPlayerSelection === 'scissors' && getComputerSelection === 'rock') {
        message = 'You lose this round, rock beats scissors.'
    } else {
        message = 'You draw this round, try again.'
    }

    return message;
}

console.log(computerSelection)
console.log(playerSelection);

console.log(playRound(playerSelection, computerSelection));
