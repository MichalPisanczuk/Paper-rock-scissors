const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const startBtn = document.querySelector('button');
const resetBtn = document.querySelector('.reset');
const scores = document.querySelector('.scors');
const gameScore = document.createElement('span');
const choice = document.createElement('span');
let playerChoice = "";
let computerChoice = "";
const computerArr = ['paper', 'rock', 'scissors'];
let games = 0;
let playerWins = 0;
let computerWins = 0;
let draws = 0;

function choicePaper() {
    paper.style.boxShadow = '0 0 10px 6px grey';
    rock.style.boxShadow = '';
    scissors.style.boxShadow = '';
    return choiceRender(playerChoice = 'paper');
}

function choiceRock() {
    rock.style.boxShadow = '0 0 10px 6px grey';
    paper.style.boxShadow = '';
    scissors.style.boxShadow = '';
    return choiceRender(playerChoice = 'rock');

}

function choiceScissors() {
    scissors.style.boxShadow = '0 0 10px 6px grey';
    rock.style.boxShadow = '';
    paper.style.boxShadow = '';
    return choiceRender(playerChoice = 'scissors');

}

function choiceRender(playerHand) {
    scores.textContent = "";
    choice.textContent = `Player hand is: ${playerHand}`;;
    scores.appendChild(choice);
}

function startGame() {
    if (playerChoice != "") {
        gameScore.textContent = "";
    computerChoice = computerArr[Math.floor(Math.random() * (3 - 0))];
    games++;
    if (computerChoice === 'paper') {
        if (playerChoice === 'scissors') {
            playerWins++;
        } else if (playerChoice === 'rock') {
            computerWins++;
        } else {
            draws++;
        }
    } else if (computerChoice === 'rock') {
        if (playerChoice === 'paper') {
            playerWins++;
        } else if (playerChoice === 'scissors') {
            computerWins++;
        } else {
            draws++;
        }
    } else {
        if (playerChoice === 'paper') {
            computerWins++;
        } else if (playerChoice === 'rock'){
            playerWins++;
        } else {
            draws++;
        }
    }
    generateScore();
} else {
    alert('Choice your hand!');
}
}

function generateScore() {
    gameScore.innerHTML = `<br />Computer hand is: ${computerChoice} <br />Games: ${games} <br /> Player wins: ${playerWins} <br />Computer Wins ${computerWins} <br />Draws: ${draws}`;
    scores.appendChild(gameScore);
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    games = 0;
    playerChoice = "";
    computerChoice = "";
    draws = 0;
    gameScore.textContent = "";
    rock.style.boxShadow = '';
    paper.style.boxShadow = '';
    scissors.style.boxShadow = '';
    choice.textContent = '';
}

paper.addEventListener('click', choicePaper);
rock.addEventListener('click', choiceRock);
scissors.addEventListener('click', choiceScissors);

startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetGame)