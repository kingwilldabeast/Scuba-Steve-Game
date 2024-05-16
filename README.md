<img src=“./WF1.png”>

# Lets Play Scuba-Steve
Object: Help Scuba Steve guess the secret word before he gains too many heads. Each letter guessed will be evaluated as truthy/falsy till the game results in a win or a loss.
## How to Play
1. Players can take turns or work together. 

>Gameplay continues until the players guess the word or they run out of guesses and the heads have constructed their figure.

2. Guesses will be logged letter by letter.

>The previous falsy letters guessed will not be logged; to increase difficultly for the player and help build mental recall.

3. Start guessing letters if you are the player. 

***Example:*** ``` “Is there an 'a' in the word?” ```

4. The letter will fill in the  appropriate blanks if the players guess correctly/truthy. 

>Whenever a player guesses a letter that is falsy in the secret word, they will receive a skull that brings them closer to losing and constructing their END.***

5. The player wins when they correctly build the secret word. If the players get every letter of the word before the skulls build the END; they've won. 

***This is a letter by letter game. So fill in the blanks individually guessing the whole word at once will not be logged.***

## Development Setup & Tools
Begin by designing a wireframe.

### Tools needed to make the game
1. Javascript
2. CSS
3. HTMl

### Knowledge Needed
* Understanding of above tools.
* DOM manipulation
* Animation Inserts

## Contributers

For more information please source credit of: [Wiki](https://www.wikihow.com/Play-Hangman)







Tasks wanted accomplished with game:



Steps to making the code:
Start with creating ("let") variables that are able to change throughout the game, that help you log your correct and wrong guesses.
Next make ("const") variables that do not change throughout the game to help set limits on the amount of wrong guesses, hold values, and set arrays.
Be sure to define a wordBank array that holds the words used in the game.
Creata a function that will randomly select words from that bank.
To trigger the game, create an event listener that initiates the game logic when clicked.
The listener will be the core operator of our game and manager of the game flow.
1. It will check the input guessed to see if it matches any words in the secret word. If there is a match the board display will update with the letter inside the correct tile. 
2. If the input guessed is incorrect, the wrong guess will count a strike against you. With each incorrect guess the listener is checking if the maximum wrong number has been reached.
3. As the event listener is managing the game when the game has ended with either a winner or a loser, the game will trigger a delayed restart.
Create a function called ("restart()") that reloads the page when the game has resulted in a winner or a loser.