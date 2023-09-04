// Rock paper scissors game. Needs to take two inputs, one from the computer and one from the user.
    // Create a function that takes the computer's input
    // Computer input has to be completely random
    // Create player input function 
    // Create a function that does one round of RPS

// Rock > Scissors | Scissors > Paper | Paper > Rock | Everything else is a draw



function getComputerChoice() {
    let randomInput = Math.floor(Math.random() * 3 + 1);
    
    console.log(randomInput);
    
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
    console.log(randomInput);
}