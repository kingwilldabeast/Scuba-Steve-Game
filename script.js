
let maxWrong = 4;
let wrongGuess = 0;
const button = document.querySelector(`#submitButton`);
// This is the set array for the game that will help us index each letter
const secretWord = ['h','i','p','p','o','p','o','t','a','m','u','s'];


button.addEventListener ("click", (event) => {
    let input = document.querySelector(`#textInput`).value;
    for (let i = 0; i < secretWord.length; i++)
    if (input == secretWord) {
        document.querySelectorAll(`li`)[0].innerText = input;
    }
    // if (input == `p`) {
    //     document.querySelectorAll('li')[2].innerText = input;
    //     document.querySelectorAll('li')[3].innerText = input;
    //     document.querySelectorAll('li')[5].innerText = input;
    // }
}
)

// This will be the loop that we use for each guessed letter to try to find a match

function winner () {}
// function guess (letter) {
//     return letter == 
// }
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