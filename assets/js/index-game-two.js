// Constants for player tokens
const PLAYER_1 = 'p1';
const PLAYER_2 = 'p2';

// Audio elements for dice rolling and winning
const rollingSound = new Audio('rpg-dice-rolling-95182.mp3');
const winSound = new Audio('winharpsichord-39642.mp3');

// Initial positions and scores for players
let p1Position = 0;
let p2Position = 0;
let p1Score = 0;
let p2Score = 0;
let drawScore = 0;

// Variable to keep track of turns
let isPlayer1Turn = true;

// Special positions (snakes and ladders)
const specialPositions = {
    1: 38,
    4: 14,
    8: 30,
    21: 42,
    28: 76,
    32: 10,
    36: 6,
    48: 26,
    50: 67,
    62: 18,
    71: 92,
    80: 99,
    88: 24,
    95: 56,
    97: 78
};

// Starting the game
startGame();

// Adding an event listener for the dice button
document.getElementById("dice").addEventListener("click", rollDice);

// Function to start the game
function startGame() {
    p1Position = 0;
    p2Position = 0;
    isPlayer1Turn = true;
    updateBoardHoverClass();
}

// Function to get the new position of the player
function getPosition(playerPosition, roll) {
    let newPosition = playerPosition + roll;
    if (newPosition > 100) {
        return playerPosition;
    }
    return specialPositions[newPosition] || newPosition;
}

// Function to move the player on the board
function movePlayer(player, position, correction) {
    const {
        x,
        y
    } = calculatePosition(position, correction);
    const playerElem = document.getElementById(player);
    playerElem.style.transition = `linear all .5s`;
    playerElem.style.left = `${x}px`;
    playerElem.style.top = `${y}px`;
}

// Function to calculate the player's position on the board
function calculatePosition(position, correction) {
    let x, y;
    if (position < 10) {
        x = (position - 1) * 62;
        y = -0 * 62 - correction;
    } else {
        const [n1, n2] = String(position).split('').map(Number);
        if (n1 % 2 !== 0) {
            x = (n2 === 0 ? 9 : 9 - (n2 - 1)) * 62;
        } else {
            x = (n2 === 0 ? 0 : n2 - 1) * 62;
        }
        y = (-n1) * 62 - correction;
    }
    return {
        x,
        y
    };
}

// Function to check if the player has won
function checkWin(position) {
    return position === 100;
}

// Function to end the game
function endGame(player) {
    winSound.play();
    alert(`${player === PLAYER_1 ? 'Black' : 'Red'} Won!!`);
    location.reload();
}

// Function to update the score
function updateScore(player) {
    if (player === PLAYER_1) {
        p1Score++;
        document.getElementById('playerXScore').innerText = `Player X: ${p1Score}`;
    } else {
        p2Score++;
        document.getElementById('playerOScore').innerText = `Player O: ${p2Score}`;
    }
}

// Function to roll the dice
function rollDice() {
    rollingSound.play();
    const roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = roll;
    if (isPlayer1Turn) {
        p1Position = getPosition(p1Position, roll);
        movePlayer(PLAYER_1, p1Position, 0);
        if (checkWin(p1Position)) {
            endGame(PLAYER_1);
            updateScore(PLAYER_1);
        }
    } else {
        p2Position = getPosition(p2Position, roll);
        movePlayer(PLAYER_2, p2Position, 55);
        if (checkWin(p2Position)) {
            endGame(PLAYER_2);
            updateScore(PLAYER_2);
        }
    }
    isPlayer1Turn = !isPlayer1Turn;
    updateBoardHoverClass();
}

// Function to update the board hover class
function updateBoardHoverClass() {
    const board = document.getElementById('board');
    board.classList.remove(PLAYER_1, PLAYER_2);
    board.classList.add(isPlayer1Turn ? PLAYER_1 : PLAYER_2);
}