/* jshint esversion: 6 */

let numOfKings = 0;
let whiteScore = 0;
let blackScore = 0;
let tog = 1; // 1 for White's turn, 0 for Black's turn

// Winning message and restart button elements
const winningMessageElement = document.getElementById('winning-message-three');
const restartButton = document.getElementById('restart-button-three');
const winningMessageTextElement = document.querySelector('[data-winning-message-text-three]');

/**
 * Inserting images into the chess board.
 */
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            const pieceType = image.innerText;
            const imgClass = pieceType.includes('pawn') ? 'all-pawn' : 'all-img';
            image.innerHTML = `${pieceType} <img class='all-img ${imgClass}' src="assets/images/${pieceType}.png" alt="">`;
            image.style.cursor = 'pointer';
        }
    });
}

insertImage();

/**
 * Color the chessboard in an alternating pattern.
 */
function colorBoard() {
    document.querySelectorAll('.box').forEach(box => {
        const id = box.id.slice(1);
        const row = parseInt(id.charAt(0));
        const col = parseInt(id.slice(1));
        const isEven = (row + col) % 2 === 0;
        box.style.backgroundColor = isEven ? 'rgb(199, 182, 165)' : 'rgb(112, 47, 49)';
    });
}

colorBoard();

/**
 * Clear invalid paths when pieces of the same color are aligned.
 */
function clearInvalidPaths() {
    document.querySelectorAll('.box').forEach(selectedBox => {
        if (selectedBox.style.backgroundColor === 'lightblue') {
            document.querySelectorAll('.box').forEach(targetBox => {
                if (targetBox.style.backgroundColor === 'lightgreen' && targetBox.innerText.length !== 0) {
                    const selectedColor = selectedBox.innerText.charAt(0);
                    const targetColor = targetBox.innerText.charAt(0);

                    if (selectedColor === targetColor) {
                        const id = targetBox.id.slice(1);
                        const row = parseInt(id.charAt(0));
                        const col = parseInt(id.slice(1));
                        const isEven = (row + col) % 2 === 0;
                        targetBox.style.backgroundColor = isEven ? 'rgb(199, 182, 165)' : 'rgb(112, 47, 49)';
                    }
                }
            });
        }
    });
}

// Initial game state
tog = 1;
let whiteCastleAvailable = true;
let blackCastleAvailable = true;

// Event listener for each box
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => handleBoxClick(box));
});

/**
 * Handle click event on a chessboard box.
 * @param {HTMLElement} box - The clicked box element.
 */
function handleBoxClick(box) {
    const isEmptyBox = box.innerText.length === 0;

    if (box.style.backgroundColor === 'pink') {
        clearHighlights();  // Clear all highlights when clicking on the same piece again
    } else if (['green', 'aqua'].includes(box.style.backgroundColor)) {
        movePiece(box);  // Move the piece if a valid square is clicked
        tog++; // Switch turns
        clearHighlights();  // Clear all highlights after a move
        insertImage();  // Re-insert images to update the board
    } else {
        clearHighlights();  // Clear previous highlights
        highlightPaths(box);  // Highlight the paths for the selected piece
    }
}

/**
 * Clear all highlights on the board.
 */
function clearHighlights() {
    document.querySelectorAll('.box').forEach(box => {
        colorBoard();  // Reset the color of the board
    });
}

/**
 * Move the piece to the selected box.
 * @param {HTMLElement} targetBox - The target box element where the piece will move.
 */
function movePiece(targetBox) {
    let kingCaptured = false;
    let winner = '';

    document.querySelectorAll('.box').forEach(pinkBox => {
        if (pinkBox.style.backgroundColor === 'pink') {
            if (targetBox.innerText.includes('king')) {
                kingCaptured = true;
                winner = tog % 2 !== 0 ? 'White' : 'Black'; // Determine the winner based on the current turn
            }
            targetBox.innerText = pinkBox.innerText;  // Move the piece to the new box
            pinkBox.innerText = '';  // Clear the piece from the old box
        }
    });

    if (kingCaptured) {
        updateScore(winner); // Update the scoreboard
        showWinningMessage(winner);  // Display the winning message
    }
}

/**
 * Display the winning message and end the game.
 * @param {string} winner - The color of the winning player ("White" or "Black").
 */
function showWinningMessage(winner) {
    winningMessageTextElement.innerText = `${winner} Wins!`;
    winningMessageElement.classList.add('show'); // Display the winning message

    // Disable further moves
    document.querySelectorAll('.box').forEach(box => {
        box.style.pointerEvents = 'none';
    });
}

/**
 * Update the score based on the winner.
 * @param {string} winner - The color of the winning player ("White" or "Black").
 */
function updateScore(winner) {
    if (winner === 'White') {
        whiteScore++;
        document.querySelector('.scoreboard #white-score').innerText = `White total wins: ${whiteScore}`;
    } else if (winner === 'Black') {
        blackScore++;
        document.querySelector('.scoreboard #black-score').innerText = `Black total wins: ${blackScore}`;
    }
}

/**
 * Restart the game without reloading the page.
 */
function restartGame() {
    // Reset the board state
    document.querySelectorAll('.box').forEach(box => {
        box.innerText = '';  // Clear piece from all boxes
        colorBoard(); // Recolor the board
    });

    // Reset game state
    tog = 1; // White's turn
    whiteCastleAvailable = true;
    blackCastleAvailable = true;
    insertImage(); // Re-insert images to the board

    // Hide the winning message
    winningMessageElement.classList.remove('show');

    // Re-enable moves
    document.querySelectorAll('.box').forEach(box => {
        box.style.pointerEvents = 'auto';
    });
}

// Add event listener to the restart button
document.getElementById('restart-button-three').addEventListener('click', restartGame);

/**
 * Highlight possible movement paths for a selected piece.
 * @param {HTMLElement} box - The clicked box element.
 */
function highlightPaths(box) {
    const id = box.id.slice(1); // Extract the numeric part of the box ID
    const row = parseInt(id.charAt(0)); // Get the row from the ID
    const col = parseInt(id.slice(1)); // Get the column from the ID
    const position = row * 100 + col; // Calculate a unique position identifier

    const isWhiteTurn = tog % 2 !== 0; // Determine if it's white's turn based on toggle
    const pieceType = box.innerText; // Get the piece type (e.g., Wpawn, Bking)
    const pieceColor = pieceType.charAt(0); // Extract the color (W or B)
    const pieceName = pieceType.slice(1); // Extract the name of the piece (pawn, king, etc.)

    if ((isWhiteTurn && pieceColor === 'W') || (!isWhiteTurn && pieceColor === 'B')) {
        box.style.backgroundColor = 'pink'; // Highlight the selected piece's box

        switch (pieceName) {
            case 'pawn':
                highlightPawnPaths(position, isWhiteTurn);
                break;
            case 'king':
                highlightKingPaths(position);
                break;
            case 'rook':
                highlightRookPaths(position);
                break;
            case 'bishop':
                highlightBishopPaths(position);
                break;
            case 'queen':
                highlightQueenPaths(position);
                break;
            case 'knight':
                highlightKnightPaths(position);
                break;
            default:
                console.error("Unknown piece: " + pieceName);
        }
    }
}

/**
 * Highlights possible moves for a pawn.
 */
function highlightPawnPaths(position, isWhiteTurn) {
    const direction = isWhiteTurn ? 1 : -1;
    const startRow = isWhiteTurn ? 2 : 7;

    // Single step forward
    highlightMove(position + direction * 100, 'green', true);

    // Double step forward on initial move
    if (Math.floor(position / 100) === startRow) {
        highlightMove(position + direction * 200, 'green', true);
    }

    // Capture diagonally
    highlightCapture(position + direction * 100 + 1, 'green');
    highlightCapture(position + direction * 100 - 1, 'green');
}

/**
 * Highlights possible moves for a king.
 */
function highlightKingPaths(position) {
    const moves = [1, -1, 100, -100, 101, 99, -101, -99];
    moves.forEach(offset => highlightMove(position + offset, 'green'));

    // Castling moves
    if (whiteCastleAvailable && position === 105) {
        highlightMove(107, 'aqua', true); // King-side castling
        highlightMove(103, 'aqua', true); // Queen-side castling
    }
    if (blackCastleAvailable && position === 805) {
        highlightMove(807, 'aqua', true); // King-side castling
        highlightMove(803, 'aqua', true); // Queen-side castling
    }
}

/**
 * Highlights possible moves for a rook.
 */
function highlightRookPaths(position) {
    highlightDirectionalMoves(position, 100); // Vertical
    highlightDirectionalMoves(position, 1);   // Horizontal
}

/**
 * Highlights possible moves for a bishop.
 */
function highlightBishopPaths(position) {
    highlightDirectionalMoves(position, 101); // Diagonal right-up
    highlightDirectionalMoves(position, 99);  // Diagonal left-up
}

/**
 * Highlights possible moves for a queen.
 */
function highlightQueenPaths(position) {
    highlightRookPaths(position);
    highlightBishopPaths(position);
}

/**
 * Highlights possible moves for a knight.
 */
function highlightKnightPaths(position) {
    const moves = [101, 99, 201, 199, -101, -99, -201, -199];
    moves.forEach(offset => highlightMove(position + offset, 'green'));
}

/**
 * Highlights moves in a specific direction.
 */
function highlightDirectionalMoves(position, offset) {
    for (let i = 1; i < 9; i++) {
        const targetPos = position + i * offset;
        if (!isValidPosition(targetPos)) break; // Boundary check
        if (!highlightMove(targetPos, 'green')) break;
    }
}

/**
 * Checks if a position is valid on the board.
 * @param {number} position - The position to check.
 * @returns {boolean} - True if the position is valid, false otherwise.
 */
function isValidPosition(position) {
    const row = Math.floor(position / 100);
    const col = position % 100;
    return row >= 1 && row <= 8 && col >= 1 && col <= 8;
}

/**
 * Highlights a move to a target box.
 */
function highlightMove(position, color, mustBeEmpty = false) {
    const targetBox = document.getElementById(`b${position}`);
    if (targetBox) {
        if (mustBeEmpty && targetBox.innerText.length > 0) return false;
        targetBox.style.backgroundColor = color;
        return true;
    }
    return false;
}

/**
 * Highlights a capture move.
 */
function highlightCapture(position, color) {
    const targetBox = document.getElementById(`b${position}`);
    if (targetBox && targetBox.innerText.length > 0) {
        targetBox.style.backgroundColor = color;
    }
}