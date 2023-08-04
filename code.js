function log(text) {
    console.log(text);
}
log("This was made on the dev branch ;)");
log("0");

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
}

function playerChoice(numberOfGames) {
    let playerSelection = prompt(`Round: ${numberOfGames + 1}\nPlease enter the full word or letter for these choices:\n(r)ock\n(p)aper\n(s)cissors`).toLowerCase();

    if (playerSelection === 'r' || playerSelection === 'rock') {
        return 'rock';
    }
    else if (playerSelection === 'p' || playerSelection === 'paper') {
        return 'paper';
    }
    else if (playerSelection === 's' || playerSelection === 'scissors') {
        return 'scissors';
    } else {
        return 'Invalid selection';
    }

}

function playRound(numberOfGames) {
    let computersChoice = getComputerChoice();
    let playersChoice = playerChoice(numberOfGames);
    log(`AI: ${computersChoice} PC: ${playersChoice}`);
    if (playersChoice === 'rock') {
        //0=player point, 1=ai point, 2=draw
        if (computersChoice === 'paper') {
            log("You Lose! Paper beats Rock");
            return 1;
        } else if (computersChoice === 'scissors') {
            log("You Win! Rock beats Scissors");
            return 0;
        } else {
            log("Draw! You both chose Rock")
            return 2;
        }
    }
    if (playersChoice === 'paper') {
        if (computersChoice === 'rock') {
            log("You Win! Paper beats Rock");
            return 0;
        } else if (computersChoice === 'scissors') {
            log("You Lose! Scissors beats Paper");
            return 1;
        } else {
            log("Draw! You both chose Paper")
            return 2;
        }
    }
    if (playersChoice === 'scissors') {
        if (computersChoice === 'paper') {
            log("You Win! Scissors beats Paper");
            return 0;
        } else if (computersChoice === 'rock') {
            log("You Lose! Rock beats Scissors");
            return 1;
        } else {
            log("Draw! You both chose Scissors")
            return 2;
        }
    }
    if (playersChoice === "Invalid selection") {
        return 3;
    }

}

alert("Welcome to RoShamBo!\nRules:\nRock > Scissors\nScissors > Paper\nPaper > Rock")

function playGame() {
    let botScore = 0;
    let playerScore = 0;
    let numberOfGames = 0;
    while (numberOfGames < 5) {
        let pointChoice = playRound(numberOfGames);
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

playGame();







