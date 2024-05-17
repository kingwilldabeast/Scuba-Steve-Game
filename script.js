/*-------------------------------- Constants --------------------------------*/
const maxWrong = 4;
const skull = [1,2,3,4]
const loser = `Defeated! 😭`
const winner = `Congratulations!`

// The below constant is button waiting for its click in the event listener.
let button = document.querySelector(`#submitButton`);
button.disabled = false;

// The below constant is the set hangman word string for the game.
const wordBank = ['hippopotamus', 'fergalicious', 'babyproofing'];

/*-------------------------------- Variables --------------------------------*/
// The below variables allow us to update the progress of the game.
let wrong = 0;
let correct = 0;

// The below line randomly picks the word to be guessed from the wordBank array, 
// and changes the string to an array to help log the index of each letter.
let secretWord = word().split('');

/*----------------------------- Event Listeners -----------------------------*/
// The below event listener is operating as the functioning core for our game.
button.addEventListener (`click`, () => {
    // The lines below logs the inputs value/letter guessed.
    let input = document.querySelector(`#textInput`).value.toLowerCase();
    // The guessed letter goes through the length of the word checking for a match.
    for (let i = 0; i < secretWord.length; i++) {
        // When the guessed letter matches the letter at [i] in the secretword.
        if (input == secretWord[i]) {
            // Fills in the cell at [i] with the guessed letter only if it is not already filled
            // and increments the correct guess count.
            if(!document.querySelectorAll(`li`)[i].innerText) {
                document.querySelectorAll(`li`)[i].innerText = input;
                correct++;
            }
        }
    } 

    // If the correct count is equal to the length of the secretWord,
    // the lines below disable the button to prevent user from making more guesses,
    // shows the winner text, play the winner tune,
    // set timer to reset the game after 9000ms, and shows confetti.
    if (correct === secretWord.length) {
        button.disabled = true
        document.querySelector(`h3`).innerText = winner;
        audio = new Audio('Ferg.mp4');
        audio.play();
        setTimeout(() => restart(winner), 9000)
        awards()
    }

    // If the user makes a wrong guess or If the guessed letter is not in the secretWord array
    // the below lines increment the wrong count.
    if (input && !secretWord.includes(input)){
        wrong = wrong + 1 
        // If the wrong count reaches the maxWrong
        // the lines below disable the button, show the loser text, 
        // set a timer to restart after 15000ms, play the loser video, 
        // and show the wrong count.
        if (wrong == maxWrong) {
            button.disabled = true
            document.querySelector(`h3`).innerText = loser;
            setTimeout(() => restart(loser), 15000);
            document.querySelector("video").style.opacity = 1
            document.querySelector("video").play();
        }
        document.querySelector(`b`).innerText = wrong  
    }
    // With each wrong guess a strike will be logged in the [i] throughout the strikes length.
    for (let i = 0; i < skull.length; i++) {
        if (wrong >= skull[i]) {
            document.querySelectorAll(`.strike`)[i].innerText = `💀`
        }
    }
})
/*-------------------------------- Functions --------------------------------*/
// The below function filters through the length of our wordbank and selects a word at random.
function word() {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}
// The function below will reload the page when the game has came to an end.
function restart (game) { 
    if (game === loser || winner) {
        window.location.reload();
    }
}
// The function below holds the code for the confetti that will be deployed in our button click.
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