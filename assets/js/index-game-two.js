let tog = 1;
let p1sum = 0;
let p2sum = 0;
let p1Score = 0;
let p2Score = 0;

const winningMessageElement = document.getElementById('winningMessageTwo');
const restartButton = document.getElementById('restartButtonTwo');
const winningMessageTextElement = document.querySelector('[data-winning-message-text-two]');

// Function to play the game for a player
function play(player, psum, correction, num) {
    let sum;
    if (psum === 'p1sum') {
        p1sum += num;
        if (p1sum > 100) p1sum -= num;
        p1sum = handleSnakesAndLadders(p1sum);
        sum = p1sum;
    } else if (psum === 'p2sum') {
        p2sum += num;
        if (p2sum > 100) p2sum -= num;
        p2sum = handleSnakesAndLadders(p2sum);
        sum = p2sum;
    }

    // Move the player marker
    movePlayer(player, sum, correction);

    // Check if the player has won
    if (sum === 100) {
        endGame(player);
    }
}

// Function to handle movement of player marker
function movePlayer(player, position, correction) {
    const gridWidth = 60; // Adjust based on actual width
    const gridHeight = 60; // Adjust based on actual height
    document.getElementById(player).style.transition = 'all 0.5s linear';

    if (position < 10) {
        document.getElementById(player).style.left = `${(position - 1) * gridWidth}px`;
        document.getElementById(player).style.top = `${-0 * gridHeight - correction}px`;
    } else {
        let column = position % 10;
        let row = Math.floor(position / 10);

        if (column === 0) {
            document.getElementById(player).style.left = `${(row % 2 === 0 ? 0 : 9) * gridWidth}px`;
            document.getElementById(player).style.top = `${-(position / 10 - 1) * gridHeight - correction}px`;
        } else {
            document.getElementById(player).style.left = `${row % 2 === 0 ? (column - 1) * gridWidth : (10 - column) * gridWidth}px`;
            document.getElementById(player).style.top = `${-Math.floor(position / 10) * gridHeight - correction}px`;
        }
    }
}

// Function to handle snakes and ladders
function handleSnakesAndLadders(position) {
    const ladders = {
        1: 38,
        4: 14,
        8: 30,
        21: 42,
        28: 76,
        50: 67,
        71: 92,
        80: 99
    };
    const snakes = {
        32: 10,
        36: 6,
        48: 26,
        62: 18,
        88: 24,
        95: 56,
        97: 78
    };
    return ladders[position] || snakes[position] || position;
}