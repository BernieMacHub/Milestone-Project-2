// Constants for the X and O classes
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

// Winning combinations as an array of arrays
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Selecting all the grids, board, and the winning message elements
const grids = document.querySelectorAll('[data-grid]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

// Selecting the score elements
const playerXScoreElement = document.getElementById('playerXScore');
const playerOScoreElement = document.getElementById('playerOScore');
const drawScoreElement = document.getElementById('drawScore');

// Variables to keep track of turns and scores
let circleTurn;
let playerXScore = 0;
let playerOScore = 0;
let drawScore = 0;

// Initializing the game
startGame();

// Adding an event listener for the restart button
restartButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
    circleTurn = false;
    grids.forEach(grid => {
        // Remove existing class already marked on the board
        grid.classList.remove(X_CLASS, CIRCLE_CLASS);
        // Remove existing click listeners
        grid.removeEventListener('click', handleClick);
        // Adding a new click listener
        grid.addEventListener('click', handleClick, {
            once: true
        });
    });
    // Setting the initial board hover class
    setBoardHoverClass();
    // Hiding the winning message
    winningMessageElement.classList.remove('show');
}

// Function to handle click events on grids
function handleClick(e) {
    const grid = e.target;
    // Determining the current class (X or O) based on the turn
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    // Placing the mark on the clicked grid
    placeMark(grid, currentClass);
    // Checking if the current move results in a win
    if (checkWin(currentClass)) {
        endGame(false);
        updateScore(currentClass);
    }
    // Checking if the game is a draw
    else if (isDraw()) {
        endGame(true);
        updateScore('draw');
    }
    // Switching turns and updating the board hover class
    else {
        swapTurns();
        setBoardHoverClass();
    }
}

// Function to end the game
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "Nought's" : "Crosses's"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}

// Function to update the score
function updateScore(winner) {
    if (winner === X_CLASS) {
        playerXScore++;
        playerXScoreElement.innerText = `Crosses total score is: ${playerXScore}`;
    } else if (winner === CIRCLE_CLASS) {
        playerOScore++;
        playerOScoreElement.innerText = `Noughts total score is: ${playerOScore}`;
    } else if (winner === 'draw') {
        drawScore++;
        drawScoreElement.innerText = `Total amount of draws: ${drawScore}`;
    }
}

// Function to check for a draw
function isDraw() {
    return [...grids].every(grid => {
        return grid.classList.contains(X_CLASS) ||
            grid.classList.contains(CIRCLE_CLASS);
    });
}

// Function to place the mark on a grid
function placeMark(grid, currentClass) {
    grid.classList.add(currentClass);
}

// Function to swap turns
function swapTurns() {
    circleTurn = !circleTurn;
}

// Function to set the board hover class
function setBoardHoverClass() {
    board.classList.remove(X_CLASS, CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

// Function to check for a win
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return grids[index].classList.contains(currentClass);
        });
    });
}