let numOfKings = 0;
let whiteScore = 0;
let blackScore = 0;
let tog = 1; // 1 for White's turn, 0 for Black's turn

// Winning message and restart button elements
const winningMessageElement = document.getElementById('winningMessageThree');
const restartButton = document.getElementById('restartButtonThree');
const winningMessageTextElement = document.querySelector('[data-winning-message-text-three]');

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