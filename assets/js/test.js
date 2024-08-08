let numOfKings = 0;
let whiteScore = 0;
let blackScore = 0;
let tog = 1; // 1 for White's turn, 0 for Black's turn

// Winning message and restart button elements
const winningMessageElement = document.getElementById('winningMessageThree');
const restartButton = document.getElementById('restartButtonThree');
const winningMessageTextElement = document.querySelector('[data-winning-message-text-three]');


/** 
 * Inserting images to the chess board
 */

function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pawn' src="assets/images/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            } else {

                image.innerHTML = `${image.innerText} <img class='all-img' src="assets/images/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}

insertImage()

//Coloring

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(199, 182, 165)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(112, 47, 49)'
        }
    })
}
coloring()

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'lightblue') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'lightgreen' && i2.innerText.length !== 0) {


                    lightgreenText = i2.innerText

                    lightblueText = i1.innerText

                    lightblueColor = ((Array.from(lightblueText)).shift()).toString()
                    lightgreenColor = ((Array.from(lightgreenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && lightblueColor == lightgreenColor) {
                        i2.style.backgroundColor = 'rgb(199, 182, 165)'
                    }
                    if (a % 2 !== 0 && lightblueColor == lightgreenColor) {
                        i2.style.backgroundColor = 'rgb(112, 47, 49)'
                    }
                }
            })
        }
    })
}

tog = 1
whiteCastleChance = true
blackCastleChance = true

document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click', function () {

        // To delete the opposite element

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        } else if (item.style.backgroundColor == 'aqua' && item.innerText.length == 0) {
            tog = tog + 1
        } else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1

                }
            })
        }

        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup

        // Function to display the available paths for all pieces

        function whosTurn(toggle) {

            // PAWN

            if (item.innerText == `${toggle}pawn`) {
                item.style.backgroundColor = 'pink'

                if (tog % 2 !== 0 && aup < 800) {

                    if (aup == 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                        if (aup == 200 && document.getElementById(`b${a + 200}`).innerText.length == 0) {
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
                        }
                    }

                    if (aup !== 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }

                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'

                    }
                }

                if (tog % 2 == 0 && aup > 100) {

                    if (aup == 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                        if (aup == 700 && document.getElementById(`b${a - 200}`).innerText.length == 0) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'green'
                        }
                    }

                    if (aup !== 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'

                    }
                }
            }

            // KING

            if (item.innerText == `${toggle}king`) {

                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'

                }
                if (aside > 1) {
                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800) {
                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                }
                if (aup > 100) {
                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                }

                if (aup > 100 && aside < 8) {
                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                }
                if (aup > 100 && aside > 1) {
                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800 && aside < 8) {
                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800 && aside > 1) {
                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                }

                if (whiteCastleChance == true && a == 105 && document.getElementById('b106').innerText == '' && document.getElementById('b107').innerText == '' && document.getElementById('b108').innerText == 'Wrook') {
                    document.getElementById(`b107`).style.backgroundColor = 'aqua'

                }
                if (whiteCastleChance == true && a == 105 && document.getElementById('b104').innerText == '' && document.getElementById('b103').innerText == '' && document.getElementById('b102').innerText == '' && document.getElementById('b101').innerText == 'Wrook') {
                    document.getElementById(`b103`).style.backgroundColor = 'aqua'
                }

                if (blackCastleChance == true && a == 805 && document.getElementById('b806').innerText == '' && document.getElementById('b807').innerText == '' && document.getElementById('b808').innerText == 'Brook') {
                    document.getElementById(`b807`).style.backgroundColor = 'aqua'

                }
                if (blackCastleChance == true && a == 805 && document.getElementById('b804').innerText == '' && document.getElementById('b803').innerText == '' && document.getElementById('b802').innerText == '' && document.getElementById('b801').innerText == 'Brook') {
                    document.getElementById(`b803`).style.backgroundColor = 'aqua'
                }
            }

            // ROOK

            if (item.innerText == `${toggle}rook`) {

                item.style.backgroundColor = 'pink'

                //Right Direction
                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a + i}`) !== null) {
                        if (document.getElementById(`b${a + i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
                // Left Direction
                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a - i}`) !== null) {
                        if (document.getElementById(`b${a - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
                // Upward
                for (let i = 100; i < 900; i += 100) {

                    if (document.getElementById(`b${a + i}`) !== null) {
                        if (document.getElementById(`b${a + i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
                // Downward
                for (let i = 100; i < 900; i += 100) {

                    if (document.getElementById(`b${a - i}`) !== null) {
                        if (document.getElementById(`b${a - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
            }

            // BISHOP

            if (item.innerText == `${toggle}bishop`) {
                item.style.backgroundColor = 'pink'

                for (let i = 101; i < 900; i += 101) {

                    if (document.getElementById(`b${a + i}`) !== null) {
                        if (document.getElementById(`b${a + i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }

                for (let i = 99; i < 900; i += 99) {

                    if (document.getElementById(`b${a + i}`) !== null) {
                        if (document.getElementById(`b${a + i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }

                for (let i = 101; i < 900; i += 101) {

                    if (document.getElementById(`b${a - i}`) !== null) {
                        if (document.getElementById(`b${a - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }

                for (let i = 99; i < 900; i += 99) {

                    if (document.getElementById(`b${a - i}`) !== null) {
                        if (document.getElementById(`b${a - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
            }

            // QUEEN

            if (item.innerText == `${toggle}queen`) {

                item.style.backgroundColor = 'pink'

                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a + i}`) !== null) {
                        if (document.getElementById(`b${a + i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a - i}`) !== null) {
                        if (document.getElementById(`b${a - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
                for (let i = 100; i < 900; i += 100) {

                    if (document.getElementById(`b${a + i}`) !== null) {
                        if (document.getElementById(`b${a + i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
                for (let i = 100; i < 900; i += 100) {

                    if (document.getElementById(`b${a - i}`) !== null) {
                        if (document.getElementById(`b${a - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
                for (let i = 101; i < 900; i += 101) {

                    if (document.getElementById(`b${a + i}`) !== null) {
                        if (document.getElementById(`b${a + i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }

                for (let i = 99; i < 900; i += 99) {

                    if (document.getElementById(`b${a + i}`) !== null) {
                        if (document.getElementById(`b${a + i}`).innerText.length == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }

                for (let i = 101; i < 900; i += 101) {

                    if (document.getElementById(`b${a - i}`) !== null) {
                        if (document.getElementById(`b${a - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
                for (let i = 99; i < 900; i += 99) {

                    if (document.getElementById(`b${a - i}`) !== null) {
                        if (document.getElementById(`b${a - i}`).innerText.length == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        } else {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                }
            }
        }

        whosTurn(tog % 2 === 0 ? 'B' : 'W');
        reddish();
    });
});

restartButton.addEventListener('click', function () {
    document.querySelectorAll('.box').forEach(box => {
        box.innerText = '';
        box.style.backgroundColor = '';
    });
    coloring();
    insertImage();
    tog = 1;
    whiteCastleChance = true;
    blackCastleChance = true;
    winningMessageElement.classList.add('hidden');
});

function checkGameStatus() {
    function isKingInCheck(color) {
        const kingId = Array.from(document.querySelectorAll('.box')).find(box => box.innerText === `${color}king`).id;
        const kingPosition = getPositionFromId(kingId);

        return Array.from(document.querySelectorAll('.box')).some(box => {
            const piece = box.innerText;
            if (!piece.startsWith(color)) return false;

            const piecePosition = getPositionFromId(box.id);
            if (piece.includes('pawn')) return checkPawnThreat(piece, piecePosition, kingPosition);
            if (piece.includes('rook')) return checkRookThreat(piece, piecePosition, kingPosition);
            if (piece.includes('bishop')) return checkBishopThreat(piece, piecePosition, kingPosition);
            if (piece.includes('queen')) return checkQueenThreat(piece, piecePosition, kingPosition);
            if (piece.includes('king')) return checkKingThreat(piece, piecePosition, kingPosition);

            return false;
        });
    }

    function hasLegalMoves(color) {
        // Implement logic to check if the player has any legal moves.
        // This involves checking if there are any possible valid moves for any piece of the color.
        return Array.from(document.querySelectorAll('.box')).some(box => {
            const piece = box.innerText;
            if (piece.startsWith(color)) {
                // Check if there are valid moves for this piece
                return checkValidMoves(box);
            }
            return false;
        });
    }

    const whiteInCheck = isKingInCheck('W');
    const blackInCheck = isKingInCheck('B');

    if (whiteInCheck && !hasLegalMoves('W')) {
        // White is in checkmate
        return 'Black Wins';
    }
    if (blackInCheck && !hasLegalMoves('B')) {
        // Black is in checkmate
        return 'White Wins';
    }
    if (!hasLegalMoves('W') && !hasLegalMoves('B')) {
        // Stalemate
        return 'Stalemate';
    }
    return null;
}

function updateScore() {
    let whiteCaptured = 0;
    let blackCaptured = 0;

    document.querySelectorAll('.box').forEach(box => {
        const piece = box.innerText;
        if (piece.startsWith('W') && piece !== 'Wking') {
            whiteCaptured++;
        } else if (piece.startsWith('B') && piece !== 'Bking') {
            blackCaptured++;
        }
    });

    whiteScore = whiteCaptured;
    blackScore = blackCaptured;

    // Update the score display if needed
    // Example: document.getElementById('whiteScoreDisplay').innerText = whiteScore;
    // Example: document.getElementById('blackScoreDisplay').innerText = blackScore;
}

function handleGameEnd() {
    const gameStatus = checkGameStatus();
    if (gameStatus) {
        winningMessageTextElement.innerText = gameStatus;
        winningMessageElement.classList.remove('hidden');
    }
}

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        // Existing move logic...

        // Call handleGameEnd to check if the game has ended
        handleGameEnd();
    });
});