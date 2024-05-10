const secretWord = '';
let guess = null;
let maxWrong = 4;
let wrongGuess = 0;
const button = document.querySelector(`#submitButton`);
// This is the set array for the game that will help us index each letter
const board = ['H','I','P','P','O','P','O','T','A','M','U','S'];
board.forEach((guess) => console.log(guess));

button.addEventListener ("click", (event) => {
    let input = document.querySelector(`#textInput`).value;
    console.log (input);
}
)

// This will be the loop that we use for each guessed letter to try to find a match
// for (let i = 0; 0 < board.length; i++);

function winner () {}
function guess () {}
function loser () {}
// function updateBoard () {
//     .forEach((tile) => {
//         let value = parseInt(tile.getAttribute('id'))
//         tile.innerText = board[value]
//     })
// }
// function render () {
//     updateBoard()
// }
// function init () {}
// init();