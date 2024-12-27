var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score = document.getElementById("score");
var randomNumber = Math.floor(Math.random() * 100) + 1;
var totalScore = 10;

function check() {
    var enteredNumber = parseInt(guessnumber.value);

    if (isNaN(enteredNumber)) {
        result.textContent = "Please enter a valid number!";
        result.style.color = "darkblue";
        return;
    }

    if (totalScore > 0) {
        if (randomNumber === enteredNumber) {
            result.textContent = "RIGHT! You guessed it!";
            result.style.color = "darkblue";
            alert("YOU WON!");
        } else {
            totalScore -= 1;
            score.textContent = "Score: " + totalScore;
            result.textContent = "WRONG! Try again.";
            result.style.color = "darkblue";
        }

        if (totalScore === 0) {
            result.textContent = "GAME OVER! The correct number was " + randomNumber;
            result.style.color = "darkblue";
        }
    } else {
        result.textContent = "GAME OVER! Please refresh to play again.";
        result.style.color = "darkblue";
    }
}
