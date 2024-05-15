const maxWrong = 4;
const boardLength = 12;
const skull = [1,2,3,4]
const loser = `Better Luck Next Time!`
const winner = `Congratulations!`
const button = document.querySelector(`#submitButton`);
// This is the set array for the game that will help us index each letter
const secretWord = ['h','i','p','p','o','p','o','t','a','m','u','s'];
let wrong = 0;
let correct = 0;

button.addEventListener (`click`, (event) => {
    let input = document.querySelector(`#textInput`).value;
    for (let i = 0; i < secretWord.length; i++) {
        if (input == secretWord[i]) {
            document.querySelectorAll(`li`)[i].innerText = input;
            correct++;
        } 
    } 
    if (correct === secretWord.length) {document.querySelector(`h3`).innerText = winner;
    restart(winner);}
    if (!secretWord.includes(input)){
        wrong = wrong + 1 
        if (wrong == maxWrong) {
            document.querySelector(`h3`).innerText = loser;
            setTimeout(() => restart(loser), 5000);
            https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
        }
        //  url("https://www.veed.io/view/04d95098-2c35-469d-9436-ae461120f946?panel=share")
        document.querySelector(`b`).innerText = wrong   
    }
    for (let i = 0; i < skull.length; i++) {
        if (wrong >= skull[i]) {
        document.querySelectorAll(`.strike`)[i].innerText = `💀`;
    }}
}   
)

function restart (game) { 
    if (game === loser || winner) {window.location.reload();
    }
}
