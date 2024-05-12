const maxWrong = 4;
const button = document.querySelector(`#submitButton`);
// This is the set array for the game that will help us index each letter
const secretWord = ['h','i','p','p','o','p','o','t','a','m','u','s'];
let wrong = 0;

button.addEventListener (`click`, (event) => {
    let input = document.querySelector(`#textInput`).value;
    for (let i = 0; i < secretWord.length; i++) {
        if (input == secretWord[i]) {
            document.querySelectorAll(`li`)[i].innerText = input
        }
    } 
    if (!secretWord.includes(input)) { 
        wrong = wrong+1 
        if (wrong == maxWrong) {console.log(`Better Luck Next Time`)}
        document.querySelector(`b`).innerText = wrong
        //https://www.shecodes.io/athena/52832-how-to-increment-a-variable-number-in-javascript#:~:text=To%20increment%20a%20variable%20number%20each%20time%2C%20you%20can%20add,each%20time%20it%20is%20called.
    }
    console.log(input)
    // if (input == secretWord) {
    //     document.querySelectorAll(`li`)[0].innerText = input;
    // }
    // if (input == `p`) {
    //     document.querySelectorAll('li')[2].innerText = input;
    //     document.querySelectorAll('li')[3].innerText = input;
    //     document.querySelectorAll('li')[5].innerText = input;
    // }
}
)

// This will be the loop that we use for each guessed letter to try to find a match

function limit (maxWrong) {
    
}
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