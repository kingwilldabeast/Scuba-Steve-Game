
const maxWrong = 4;
let incorrect = document.querySelector(`#wrong`).value;
const button = document.querySelector(`#submitButton`);
// This is the set array for the game that will help us index each letter
const secretWord = ['h','i','p','p','o','p','o','t','a','m','u','s'];


button.addEventListener ("click", (event) => {
    let input = document.querySelector(`#textInput`).value;
    for (let i = 0; i < secretWord.length; i++) {
        if (input == secretWord[i]) {
            document.querySelectorAll(`li`)[i].innerText = input
        } else {input = losing}
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

function losing () {
    losing.forEach() = incorrect + 1
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