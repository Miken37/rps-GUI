function log(text) {
    console.log(text);
}
log("0");

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
}

// function playerChoice(numberOfGames) {   //Deprecated code from when game was CONSOLE only
//     let playerSelection = prompt(`Round: ${numberOfGames + 1}\nPlease enter the full word or letter for these choices:\n(r)ock\n(p)aper\n(s)cissors`).toLowerCase();

//     if (playerSelection === 'r' || playerSelection === 'rock') {
//         return 'rock';
//     }
//     else if (playerSelection === 'p' || playerSelection === 'paper') {
//         return 'paper';
//     }
//     else if (playerSelection === 's' || playerSelection === 'scissors') {
//         return 'scissors';
//     } else {
//         return 'Invalid selection';
//     }

// }


function playRound(playerChoice) {
    let computersChoice = getComputerChoice();
    let playersChoice = playerChoice;
    playerGraphic.setAttribute('src', `RPS-P1-${playersChoice}.png`)
    botGraphic.setAttribute('src', `RPS-P2-${computersChoice}.png`)
    log(`Your choice: ${playersChoice}\nAI choice: ${computersChoice} `);
    if (playersChoice === 'rock') {
        //0=player point, 1=ai point, 2=draw
        if (computersChoice === 'paper') {
            statusText.textContent = "Lose!";
            return 1;
        } else if (computersChoice === 'scissor') {
            statusText.textContent = "Win!";
            return 0;
        } else {
            statusText.textContent = "Draw!";
            return 2;
        }
    }
    if (playersChoice === 'paper') {
        if (computersChoice === 'rock') {
            statusText.textContent = "Win!";
            return 0;
        } else if (computersChoice === 'scissor') {
            statusText.textContent = "Lose!";
            return 1;
        } else {
            statusText.textContent = "Draw!";
            return 2;
        }
    }
    if (playersChoice === 'scissor') {
        if (computersChoice === 'paper') {
            statusText.textContent = "Win!";
            return 0;
        } else if (computersChoice === 'rock') {
            statusText.textContent = "Lose!";
            return 1;
        } else {
            statusText.textContent = "Draw!";
            return 2;
        }
    }
    if (playersChoice === "Invalid selection") {
        return 3;
    }

}

function playGame() {
    let botScore = 0;
    let playerScore = 0;
    let numberOfGames = 0;
    while (numberOfGames < 5) {
        let pointChoice = playRound(numberOfGames);     //Determines who to give points to, returns 0 if player gains point, 1 if bot. Else its draw
        if (pointChoice == 0) {
            playerScore += 1;
        } else if (pointChoice == 1) {
            botScore += 1;
        } else if (pointChoice == 3) {
            numberOfGames -= 1;
        }
        numberOfGames += 1;
    }
    if (playerScore > botScore) {
        log(`You Win!`);
    } else if (playerScore < botScore) {
        log("You Lose!");
    }
    else log("Looks like you tied!");
    log(`Final Scores:\nYou: ${playerScore}\n BOT: ${botScore}`);
}

//Event Listeners
//Three Choices
const rockChoice = document.querySelector('.rockSelector');
rockChoice.addEventListener('click', function () {
    playRound('rock');
});
const paperChoice = document.querySelector('.paperSelector');
paperChoice.addEventListener('click', function () {
    playRound('paper')
});
const scissorChoice = document.querySelector('.scissorSelector');
scissorChoice.addEventListener('click', function () {
    playRound('scissor')
});
const statusText = document.querySelector('.status');

const playerGraphic = document.querySelector('.playerChoice');
const botGraphic = document.querySelector('.botChoice');











