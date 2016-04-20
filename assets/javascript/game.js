var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Declares the tallies to 0 
var wins = 0;
var losses = 0;
var guesses = 10;

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // This sets the computer guess equal to the random.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    {

        // It tests to determine if user won the round and then increments 
        if ((userGuess == 'a') && (computerGuess == 'a')) {
            wins++;
        } else if ((userGuess == 'a') && (computerGuess !== 'a')) {
            guesses--;
        } else if ((userGuess == 'b') && (computerGuess == 'b')) {
            wins++;
        } else if ((userGuess == 'b') && (computerGuess !== 'b')) {
            guesses--;
        } else if ((userGuess == 'c') && (computerGuess == 'c')) {
            wins++;
        } else if ((userGuess == 'c') && (computerGuess !== 'c')) {
            guesses--;
        } else if ((userGuess == 'd') && (computerGuess == 'd')) {
            wins++;
        } else if ((userGuess == 'd') && (computerGuess !== 'd')) {
            guesses--;
        } else if ((userGuess == 'e') && (computerGuess == 'e')) {
            wins++;
        } else if ((userGuess == 'e') && (computerGuess !== 'e')) {
            guesses--;
        } else if ((userGuess == 'f') && (computerGuess == 'f')) {
            wins++;
        } else if ((userGuess == 'f') && (computerGuess !== 'f')) {
            guesses--;
        } else if ((userGuess == 'g') && (computerGuess == 'g')) {
            wins++;
        } else if ((userGuess == 'g') && (computerGuess !== 'g')) {
            guesses--;
        } else if ((userGuess == 'h') && (computerGuess == 'h')) {
            wins++;
        } else if ((userGuess == 'h') && (computerGuess !== 'h')) {
            guesses--;
        } else if ((userGuess == 'i') && (computerGuess == 'i')) {
            wins++;
        } else if ((userGuess == 'i') && (computerGuess !== 'i')) {
            guesses--;
        } else if ((userGuess == 'j') && (computerGuess == 'j')) {
            wins++;
        } else if ((userGuess == 'j') && (computerGuess !== 'j')) {
            guesses--;
        } else if ((userGuess == 'k') && (computerGuess == 'k')) {
            wins++;
        } else if ((userGuess == 'k') && (computerGuess !== 'k')) {
            guesses--;
        } else if ((userGuess == 'l') && (computerGuess == 'l')) {
            wins++;
        } else if ((userGuess == 'l') && (computerGuess !== 'l')) {
            guesses--;
        } else if ((userGuess == 'm') && (computerGuess == 'm')) {
            wins++;
        } else if ((userGuess == 'm') && (computerGuess !== 'm')) {
            guesses--;
        } else if ((userGuess == 'n') && (computerGuess == 'n')) {
            wins++;
        } else if ((userGuess == 'n') && (computerGuess !== 'n')) {
            guesses--;
        } else if ((userGuess == 'o') && (computerGuess == 'o')) {
            wins++;
        } else if ((userGuess == 'o') && (computerGuess !== 'o')) {
            guesses--;
        } else if ((userGuess == 'p') && (computerGuess == 'p')) {
            wins++;
        } else if ((userGuess == 'p') && (computerGuess !== 'p')) {
            guesses--;
        } else if ((userGuess == 'q') && (computerGuess == 'q')) {
            wins++;
        } else if ((userGuess == 'q') && (computerGuess !== 'q')) {
            guesses--;
        } else if ((userGuess == 'r') && (computerGuess == 'r')) {
            wins++;
        } else if ((userGuess == 'r') && (computerGuess !== 'r')) {
            guesses--;
        } else if ((userGuess == 's') && (computerGuess == 's')) {
            wins++;
        } else if ((userGuess == 's') && (computerGuess !== 's')) {
            guesses--;
        } else if ((userGuess == 't') && (computerGuess == 't')) {
            wins++;
        } else if ((userGuess == 't') && (computerGuess !== 't')) {
            guesses--;
        } else if ((userGuess == 'u') && (computerGuess == 'u')) {
            wins++;
        } else if ((userGuess == 'u') && (computerGuess !== 'u')) {
            guesses--;
        } else if ((userGuess == 'v') && (computerGuess == 'v')) {
            wins++;
        } else if ((userGuess == 'v') && (computerGuess !== 'v')) {
            guesses--;
        } else if ((userGuess == 'w') && (computerGuess == 'w')) {
            wins++;
        } else if ((userGuess == 'w') && (computerGuess !== 'w')) {
            guesses--;
        } else if ((userGuess == 'x') && (computerGuess == 'x')) {
            wins++;
        } else if ((userGuess == 'x') && (computerGuess !== 'x')) {
            guesses--;
        } else if ((userGuess == 'y') && (computerGuess == 'y')) {
            wins++;
        } else if ((userGuess == 'y') && (computerGuess !== 'y')) {
            guesses--;
        } else if ((userGuess == 'z') && (computerGuess == 'z')) {
            wins++;
        } else if ((userGuess == 'z') && (computerGuess !== 'z')) {
            guesses--;
        } else if (guesses = 0) {
            losses++;
        }

            // Taking the tallies and displaying them in HTML
            var html =
                "<p>Wins: " +
                wins +
                "</p>" +
                "<p>Losses: " +
                losses +
                "</p>"
                "<p>Guesses Remaining: " +
                guesses +
                "</p>" ;

            // Placing the html into the game ID
            document.querySelector('#game').innerHTML = html;

        }
    }

