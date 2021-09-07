const papper = document.querySelector('.papper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const startBtn = document.querySelector('button');
const resetBtn = document.querySelector('.reset');
const scores = document.querySelector('.scors');
let playerChoice = "";
let computerChoice = "";
const computerArr = ['papper', 'rock', 'scissors'];
let games = 0;
let playerWins = 0;
let computerWins = 0;
let draws = 0;

function choicePapper() {
    playerChoice = 'papper';
    const choice = document.createElement('span');
    gameScore.textContent = `papper`;
    scores.appendChild(choice);
}

function choiceRock() {
    playerChoice = 'rock';
}

function choiceScissors() {
    playerChoice = 'scissors';
}

function startGame() {
    if (playerChoice === "") alert(`Choice your hand`);
    computerChoice = computerArr[Math.floor(Math.random() * (3 - 0))];
    games++;
    if (computerChoice === 'papper') {
        if (playerChoice === 'scissors') {
            playerWins++;
        } else if (playerChoice === 'rock') {
            computerWins++;
        } else {
            draws++;
        }
    } else if (computerChoice === 'rock') {
        if (playerChoice === 'papper') {
            playerWins++;
        } else if (playerChoice === 'scissors') {
            computerWins++;
        } else {
            draws++;
        }
    } else {
        if (playerChoice === 'papper') {
            computerWins++;
        } else if (playerChoice === 'rock'){
            playerWins++;
        } else {
            draws++;
        }
    }
    generateScore();
}

function generateScore() {
    console.log('player: ' + playerChoice);
    console.log('computer: ' + computerChoice);
    console.log('ilość gier: ' + games);
    console.log('player wins: ' + playerWins);
    console.log('computer wins: ' + computerWins);
    console.log('draws: ' + draws);
    const gameScore = document.createElement('span');
    gameScore.textContent = `dupa`;
    scores.appendChild(gameScore);
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    games = 0;
    playerChoice = "";
    computerChoice = "";
}

papper.addEventListener('click', choicePapper);
rock.addEventListener('click', choiceRock);
scissors.addEventListener('click', choiceScissors);

startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetGame)