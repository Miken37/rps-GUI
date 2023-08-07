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
    const roundUI = document.querySelector('.roundText');
    const playerScoreUI = document.querySelector('.playerScoreNum');
    const botScoreUI = document.querySelector('.botScoreNum');


    let computersChoice = getComputerChoice();
    let playersChoice = playerChoice;

    let roundNum = parseInt(roundUI.textContent);
    roundNum += 1;
    let p1Score = parseInt(playerScoreUI.textContent);
    let p2Score = parseInt(botScoreUI.textContent);
    playerGraphic.setAttribute('src', `RPS-P1-${playersChoice}.png`)
    botGraphic.setAttribute('src', `RPS-P2-${computersChoice}.png`)
    log(`Your choice: ${playersChoice}\nAI choice: ${computersChoice} `);
    if (playersChoice === 'rock') {
        //0=player point, 1=ai point, 2=draw
        if (computersChoice === 'paper') {
            statusText.textContent = "Lose!";
            p2Score += 1;

        } else if (computersChoice === 'scissor') {
            statusText.textContent = "Win!";
            p1Score += 1;
        } else {
            statusText.textContent = "Draw!";
        }
    }
    if (playersChoice === 'paper') {
        if (computersChoice === 'rock') {
            statusText.textContent = "Win!";
            p1Score += 1;
        } else if (computersChoice === 'scissor') {
            statusText.textContent = "Lose!";
            p2Score += 1;
        } else {
            statusText.textContent = "Draw!";
        }
    }
    if (playersChoice === 'scissor') {
        if (computersChoice === 'paper') {
            statusText.textContent = "Win!";
            p1Score += 1;
        } else if (computersChoice === 'rock') {
            statusText.textContent = "Lose!";
            p2Score += 1;
        } else {
            statusText.textContent = "Draw!";

        }
    }
    roundUI.textContent = roundNum;
    playerScoreUI.textContent = p1Score;
    botScoreUI.textContent = p2Score;
    if (p1Score >= 5) {
        endGame("p1");
    } else if (p2Score >= 5) {
        endGame("p2");
    }
}

function endGame(winner) {
    playerGraphic.remove();
    botGraphic.remove();
    statusText.classList.toggle('status');
    statusText.classList.toggle('winnerText');
    if (winner == "p1") {
        statusText.textContent = `Congratulations! You Win!`;
    } else {
        statusText.textContent = 'Unfortunately you have lost the battle...';
    }
    rockChoice.remove();
    paperChoice.remove();
    scissorChoice.remove();
    const restartBtn = document.createElement('button');
    restartBtn.textContent = "Restart";
    const buttonContainer = document.querySelector('.buttonContainer');
    buttonContainer.appendChild(restartBtn);
    restartBtn.addEventListener('click', function () {
        location.reload();
    });
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
//Graphics
const statusText = document.querySelector('.status');

const playerGraphic = document.querySelector('.playerChoice');
const botGraphic = document.querySelector('.botChoice');















