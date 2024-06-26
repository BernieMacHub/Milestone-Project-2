// Constants for the X and O classes
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

// Winning combinations as an array of arrays
const WINNING_COMBINATIONS = [
    [0, 1, 2], // Row
    [3, 4, 5], // Row
    [6, 7, 8], // Row
    [0, 3, 6], // Column
    [1, 4, 7], // Column
    [2, 5, 8], // Column
    [0, 4, 8], // Diagonal
    [2, 4, 6] // Diagonal
];

// Creating variables for the grids, the board and the winning message
const grids = document.querySelectorAll('[data-grid]');
const board = document.getElementById('board');
const winningMessage = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageText = document.querySelector('[data-winning-message-text')

// Selecting the score elements
const XScoreElement = document.getElementById('XScore');
const OScoreElement = document.getElementById('OScore');
const DrawElement = document.getElementById('Draw');

// Variables to keep track of the player scores
let circleTurn;
let XScore = 0;
let OScore = 0;
let draw = 0;

// Initializing the game
startGame();

// Event listener for the restart button
restartButton.addEventListener('click', startGame);

// Functions

// Function to start the game
function startGame() {

}

// Function to handle click events on grids
function handleClick() {

}

// Function to end the game
function endGame() {

}

// Function to place a mark on the cell
function placeMark() {

}

// Function to set the board hover class based on the turn
function setBoardHoverClass() {

}

// Function to check if the current player has won
function checkWin() {

}