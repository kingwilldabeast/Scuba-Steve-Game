const maxWrong = 4;
const boardLength = 12;
const loser = `Better Luck Next Time!`
const button = document.querySelector(`#submitButton`);
// This is the set array for the game that will help us index each letter
const secretWord = ['h','i','p','p','o','p','o','t','a','m','u','s'];
let wrong = 0;
let correct = 0;

button.addEventListener (`click`, (event) => {
    let input = document.querySelector(`#textInput`).value;
    for (let i = 0; i < secretWord.length; i++) {
        console.log("2");
        if (input == secretWord[i]) {
            document.querySelectorAll(`li`)[i].innerText = input;
            correct++;
        } 
    } 
    if (correct === secretWord.length) {document.querySelector(`h3`).innerText = `Congratulaions!`}
    if (!secretWord.includes(input)){
        wrong = wrong + 1 
        if (wrong == maxWrong) {
            document.querySelector(`h3`).innerText = loser
        }
        //  url("https://www.veed.io/view/04d95098-2c35-469d-9436-ae461120f946?panel=share")
        
        document.querySelector(`b`).innerText = wrong
    }
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

// function render () {
//     updateBoard()
// }
// function init () {}
// init();