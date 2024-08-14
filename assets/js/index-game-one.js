/*jshint esversion: 6 */

/**
 * Constants representing the classes for X and O players.
 */
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

/**
 * Array of arrays representing the possible winning combinations.
 * Each subarray contains the grid indices that must be occupied for a win.
 */
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

/**
 * Selectors for game elements: grid cells, board, winning message,
 * restart button, and score elements for players and draws.
 */
const grids = document.querySelectorAll('[data-grid]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winning-message');
const restartButton = document.getElementById('restart-button');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const playerXScoreElement = document.getElementById('player-x-score');
const playerOScoreElement = document.getElementById('player-o-score');
const drawScoreElement = document.getElementById('draw-score');

/**
 * Variables to track the game state: current player's turn and the scores.
 */
let circleTurn;
let playerXScore = 0;
let playerOScore = 0;
let drawScore = 0;

/**
 * Initializes the game state and starts a new game.
 * Resets grid cells, removes previous event listeners, and sets the hover effect.
 */
startGame();

/**
 * Event listener for the restart button, triggers a new game when clicked.
 */
restartButton.addEventListener('click', startGame);

/**
 * Starts the game by resetting the board, setting the first turn to X,
 * and adding event listeners to each grid for user interaction.
 */
function startGame() {
    circleTurn = false;
    grids.forEach(grid => {
        // Reset grid classes and event listeners
        grid.classList.remove(X_CLASS, CIRCLE_CLASS);
        grid.removeEventListener('click', handleClick);
        grid.addEventListener('click', handleClick, {
            once: true
        });
    });
    // Set the initial hover effect based on the turn
    setBoardHoverClass();
    // Hide the winning message
    winningMessageElement.classList.remove('show');
}

/**
 * Handles the logic when a grid is clicked. It places the current player's mark,
 * checks for a win or draw, and updates the game state accordingly.
 * 
 * @param {Event} e - The click event object.
 */
function handleClick(e) {
    const grid = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    // Place the current player's mark on the clicked grid
    placeMark(grid, currentClass);

    // Check if the current move results in a win or draw
    if (checkWin(currentClass)) {
        endGame(false);
        updateScore(currentClass);
    } else if (isDraw()) {
        endGame(true);
        updateScore('draw');
    } else {
        // Switch turns and update the hover effect
        swapTurns();
        setBoardHoverClass();
    }
}

/**
 * Ends the game and displays the appropriate win or draw message.
 * 
 * @param {boolean} draw - Whether the game ended in a draw.
 */
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerHTML = `${circleTurn ? "<span style='color: blue; font-weight: bold;'>Nought's</span>" : "<span style='color: red; font-weight: bold;'>Crosses's</span>"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}

/**
 * Updates the score for the current player or for a draw.
 * 
 * @param {string} winner - The class of the winning player or 'draw' for a draw.
 */
function updateScore(winner) {
    if (winner === X_CLASS) {
        playerXScore++;
        playerXScoreElement.innerHTML = `Team <span style="color: red; font-weight: bold;">Crosses</span> total score is: ${playerXScore}`;
    } else if (winner === CIRCLE_CLASS) {
        playerOScore++;
        playerOScoreElement.innerHTML = `Team <span style="color: blue; font-weight: bold;">Noughts</span> total score is: ${playerOScore}`;
    } else if (winner === 'draw') {
        drawScore++;
        drawScoreElement.innerText = `Total amount of draws: ${drawScore}`;
    }
}

/**
 * Checks if all grid cells are filled and no player has won, indicating a draw.
 * 
 * @returns {boolean} - Returns true if the game is a draw.
 */
function isDraw() {
    return [...grids].every(grid => {
        return grid.classList.contains(X_CLASS) || grid.classList.contains(CIRCLE_CLASS);
    });
}

/**
 * Adds the current player's class (X or O) to the selected grid.
 * 
 * @param {Element} grid - The grid element that was clicked.
 * @param {string} currentClass - The class of the current player (X or O).
 */
function placeMark(grid, currentClass) {
    grid.classList.add(currentClass);
}

/**
 * Switches the turn between the X and O players.
 */
function swapTurns() {
    circleTurn = !circleTurn;
}

/**
 * Sets the hover effect on the board to indicate the current player's turn.
 */
function setBoardHoverClass() {
    board.classList.remove(X_CLASS, CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

/**
 * Checks if the current player has won the game by matching one of the winning combinations.
 * 
 * @param {string} currentClass - The class of the current player (X or O).
 * @returns {boolean} - Returns true if the current player has won.
 */
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return grids[index].classList.contains(currentClass);
        });
    });
}