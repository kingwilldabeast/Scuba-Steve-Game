const secretWord = '';
let guessedLetters = [];
let maxWrong = 4;
let wrongGuess = 0;
let input = document.querySelector(`#textInput`)
const button = document.querySelector(`#submitButton`)
// This is the set array for the game that will help us index each letter
const board = [H,I,P,P,O,P,O,T,A,M,U,S]

button.addEventListener (`click`, () => {
    console.log (banana)
}
)

// This will be the loop that we use for each guessed letter to try to find a match
for (let i = 0; 0 < board.length; i++);

function winner () {}
function guess () {}
function loser () {}
function updateBoard () {
    squareEls.forEach((tile) => {
        let value = parseInt(tile.getAttribute('id'))
        tile.innerText = board[value]
    })
}
function render () {
    updateBoard()
}
function init () {}
init();