let tog = 1;
let p1sum = 0;
let p2sum = 0;
let p1Score = 0;
let p2Score = 0;

const winningMessageElement = document.getElementById('winningMessageTwo');
const restartButton = document.getElementById('restartButtonTwo');
const winningMessageTextElement = document.querySelector('[data-winning-message-text-two]');

/** 
 *  Function to play the game for a player
 */
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

/** 
 *  Function to handle movement of player marker
 */
function movePlayer(player, position, correction) {
    const gridWidth = 60; // Adjust based on actual width
    const gridHeight = 60; // Adjust based on actual height
    const offset = player === 'p2' ? 20 : 0; // Offset player 2 to the right by 10 pixels

    document.getElementById(player).style.transition = 'all 0.5s linear';

    if (position < 10) {
        document.getElementById(player).style.left = `${(position - 1) * gridWidth + offset}px`;
        document.getElementById(player).style.top = `${-0 * gridHeight - correction}px`;
    } else {
        let column = position % 10;
        let row = Math.floor(position / 10);

        if (column === 0) {
            document.getElementById(player).style.left = `${(row % 2 === 0 ? 0 : 9) * gridWidth + offset}px`;
            document.getElementById(player).style.top = `${-(position / 10 - 1) * gridHeight - correction}px`;
        } else {
            document.getElementById(player).style.left = `${row % 2 === 0 ? (column - 1) * gridWidth + offset : (10 - column) * gridWidth + offset}px`;
            document.getElementById(player).style.top = `${-Math.floor(position / 10) * gridHeight - correction}px`;
        }
    }
}

/** 
 *  Function to handle snakes and ladders
 */
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

/** 
 *  Event listener for dice roll button
 */
document.getElementById("diceBtn").addEventListener("click", function () {
    let num = Math.floor(Math.random() * 6) + 1; // Roll a dice (1-6)
    document.getElementById("dice").innerHTML = num; // Update dice value
    document.getElementById("dice").style.fontSize = "200%"; // Make the dice number 100% bigger
    document.getElementById("dice").style.color = "yellow"; // Make the dice number yellow

    if (tog % 2 !== 0) {
        document.getElementById('tog').innerHTML = `<strong style="font-weight:bold;">Red team Just Rolled : </strong>`;
        document.getElementById('diceBtn').style.backgroundColor = "blue";
        document.getElementById('diceBtn').style.color = "white";
        play('p1', 'p1sum', 0, num);
    } else {
        document.getElementById('tog').innerHTML = `<strong style="font-weight:bold;">Blue team Just Rolled : </strong>`;
        document.getElementById('diceBtn').style.backgroundColor = "red";
        document.getElementById('diceBtn').style.color = "black";
        play('p2', 'p2sum', 0, num);
    }

    tog++;
});

/** 
 *  Function to end the game and update scores
 */
function endGame(winner) {
    if (winner === 'p1') {
        p1Score++;
        document.getElementById('p1Score').innerHTML = `Team <strong style="color: red;">Red</strong> total wins: ${p1Score}`;
        winningMessageTextElement.innerHTML = 'Team <span style="color: red; font-weight: bold;">Red</span> Wins!';
    } else {
        p2Score++;
        document.getElementById('p2Score').innerHTML = `Team <strong style="color: blue;">Blue</strong> total wins: ${p2Score}`;
        winningMessageTextElement.innerHTML = 'Team <span style="color: blue; font-weight: bold;">Blue</span> Wins!';
    }
    document.getElementById('p1').classList.add('hidden'); // Hide player 1 marker
    document.getElementById('p2').classList.add('hidden'); // Hide player 2 marker
    winningMessageElement.classList.add('show');
}

/** 
 *  Event listener for restart button in the overlay
 */
restartButton.addEventListener("click", function () {
    // Hide the winning message
    winningMessageElement.classList.remove('show');
    // Remove hidden class from player markers
    document.getElementById('p1').classList.remove('hidden');
    document.getElementById('p2').classList.remove('hidden');
    // Reset game state by moving players back to start position
    movePlayer('p1', p1sum = 0, 0); // Reset position for player 1
    movePlayer('p2', p2sum = 0, 0); // Reset position for player 2
    tog = 1;
});