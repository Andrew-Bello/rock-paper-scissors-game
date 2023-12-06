let playerCount  = 0;
let computerCount = 0;

const buttons = document.querySelectorAll('#rps-btn');
const newMessage = document.querySelector('.message');
const divSelection = document.querySelector('.results-container')
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    })
})

function createSaButton() {
    const saButton = document.createElement('button');
    saButton.textContent = 'Start Again?'
    divSelection.append(saButton)
    saButton.addEventListener('click', () => {
        playerCount = 0;
        computerCount = 0;
        saButton.remove();
    })
    return saButton;
}


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

    if (computerSelection === playerSelection){
        newMessage.textContent = 'You draw this round, try again.'
    }
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        newMessage.textContent = 'You win this round, rock beats scissors.'
        playerCount++;
    } 
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        newMessage.textContent = 'You win this round, paper beats rock.';
        playerCount++;
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        newMessage.textContent = 'You win this round, scissors beats paper.';
        playerCount++;
    }
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        newMessage.textContent = 'You Lose this round, paper beats rock.';
        computerCount++;
    }
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        newMessage.textContent = 'You lose this round, scissors beats paper.';
        computerCount++;
    }
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        newMessage.textContent = 'You lose this round, rock beats scissors.';
        computerCount++;
    }

    if(playerCount === 5) {
        newMessage.textContent = 'Game over you win! Let\'s go again!';
        createSaButton()
    } 
    if(computerCount === 5) {
        newMessage.textContent = 'Game over you lose! Try again?';
        createSaButton()
    }
    
    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;

    console.log(playerCount);
    console.log(computerCount);
}