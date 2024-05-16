let wrong = 0;
let correct = 0;
const maxWrong = 4;
const skull = [1,2,3,4]
const loser = `Defeated! 😭`
const winner = `Congratulations!`
const button = document.querySelector(`#submitButton`);
// This is the set array for the game that will help us index each letter

const wordBank = ['hippopotamus', 'fergalicious'];

function word() {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}
let secretWord = word().split('');

button.addEventListener (`click`, (event) => {
    let input = document.querySelector(`#textInput`).value;
    for (let i = 0; i < secretWord.length; i++) {
        if (input == secretWord[i]) {
            if(!document.querySelectorAll(`li`)[i].innerText) {
                document.querySelectorAll(`li`)[i].innerText = input;
                correct++;
            }
        } 
    } 

    if (correct === secretWord.length) {
        document.querySelector(`h3`).innerText = winner;
        audio = new Audio('Ferg.mp4');
        audio.play();
        setTimeout(() => restart(winner), 12000)
        awards()
    }

    if (!secretWord.includes(input)){
        wrong = wrong + 1 
        if (wrong == maxWrong) {
            document.querySelector(`h3`).innerText = loser;
            setTimeout(() => restart(loser), 15000);
            document.querySelector("video").style.opacity = 1
            document.querySelector("video").play();
            // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
            // https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide
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
    if (game === loser || winner) {
        document.querySelector("video").style.opacity = 1
        window.location.reload();
    }
}
function awards() {
const defaults = {
    spread: 360,
    ticks: 200,
    gravity: 0,
    decay: .95,
    startVelocity: 40,
    shapes: ["hearts", "star"],
    colors: ["fad905", "08f5b2", "6ff508", "f675ff"],
  };
  confetti({
    ...defaults,
    particleCount: 450,
    scalar: 4,
  });
}
//https://confetti.js.org/more.html