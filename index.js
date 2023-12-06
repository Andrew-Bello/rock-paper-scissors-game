let playerCount  = 0;
let computerCount = 0;

const buttons = document.querySelectorAll('#rps-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    })
})





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


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let message = '';

    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        message = 'You win this round, rock beats scissors.'
        playerCount++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        message = 'You win this round, paper beats rock.';
        playerCount++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        message = 'You win this round, scissors beats paper.';
        playerCount++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        message = 'You Lose this round, paper beats rock.';
        computerCount++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        message = 'You lose this round, scissors beats paper.';
        computerCount++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        message = 'You lose this round, rock beats scissors.';
        computerCount++;
    } else {
        message = 'You draw this round, try again.'
    }

    if(playerCount === 5) message = 'Game over you win!';
    if(computerCount === 5) message = 'Game over you lose!';
    console.log(message);
    console.log(playerCount);
    console.log(computerCount);
}