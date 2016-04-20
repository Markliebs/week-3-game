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
    console.log(computerGuess)

    {

        // checks to see if the right letter was picked and then increments 
        if ((userGuess == 'a') && (computerGuess == 'a')) {
            wins++;
        } else if ((userGuess == 'a') && (computerGuess !== 'a')) {
            losses++;
        } else if ((userGuess == 'b') && (computerGuess == 'b')) {
            wins++;
        } else if ((userGuess == 'b') && (computerGuess !== 'b')) {
            losses++;
        } else if ((userGuess == 'c') && (computerGuess == 'c')) {
            wins++;
        } else if ((userGuess == 'c') && (computerGuess !== 'c')) {
            losses++;
        } else if ((userGuess == 'd') && (computerGuess == 'd')) {
            wins++;
        } else if ((userGuess == 'd') && (computerGuess !== 'd')) {
            losses++;
        } else if ((userGuess == 'e') && (computerGuess == 'e')) {
            wins++;
        } else if ((userGuess == 'e') && (computerGuess !== 'e')) {
            losses++;
        } else if ((userGuess == 'f') && (computerGuess == 'f')) {
            wins++;
        } else if ((userGuess == 'f') && (computerGuess !== 'f')) {
            losses++;
        } else if ((userGuess == 'g') && (computerGuess == 'g')) {
            wins++;
        } else if ((userGuess == 'g') && (computerGuess !== 'g')) {
            losses++;
        } else if ((userGuess == 'h') && (computerGuess == 'h')) {
            wins++;
        } else if ((userGuess == 'h') && (computerGuess !== 'h')) {
            losses++;
        } else if ((userGuess == 'i') && (computerGuess == 'i')) {
            wins++;
        } else if ((userGuess == 'i') && (computerGuess !== 'i')) {
            losses++;
        } else if ((userGuess == 'j') && (computerGuess == 'j')) {
            wins++;
        } else if ((userGuess == 'j') && (computerGuess !== 'j')) {
            losses++;
        } else if ((userGuess == 'k') && (computerGuess == 'k')) {
            wins++;
        } else if ((userGuess == 'k') && (computerGuess !== 'k')) {
            losses++;
        } else if ((userGuess == 'l') && (computerGuess == 'l')) {
            wins++;
        } else if ((userGuess == 'l') && (computerGuess !== 'l')) {
            losses++;
        } else if ((userGuess == 'm') && (computerGuess == 'm')) {
            wins++;
        } else if ((userGuess == 'm') && (computerGuess !== 'm')) {
            losses++;
        } else if ((userGuess == 'n') && (computerGuess == 'n')) {
            wins++;
        } else if ((userGuess == 'n') && (computerGuess !== 'n')) {
            losses++;
        } else if ((userGuess == 'o') && (computerGuess == 'o')) {
            wins++;
        } else if ((userGuess == 'o') && (computerGuess !== 'o')) {
            losses++;
        } else if ((userGuess == 'p') && (computerGuess == 'p')) {
            wins++;
        } else if ((userGuess == 'p') && (computerGuess !== 'p')) {
            losses++;
        } else if ((userGuess == 'q') && (computerGuess == 'q')) {
            wins++;
        } else if ((userGuess == 'q') && (computerGuess !== 'q')) {
            losses++;
        } else if ((userGuess == 'r') && (computerGuess == 'r')) {
            wins++;
        } else if ((userGuess == 'r') && (computerGuess !== 'r')) {
            losses++;
        } else if ((userGuess == 's') && (computerGuess == 's')) {
            wins++;
        } else if ((userGuess == 's') && (computerGuess !== 's')) {
            losses++;
        } else if ((userGuess == 't') && (computerGuess == 't')) {
            wins++;
        } else if ((userGuess == 't') && (computerGuess !== 't')) {
            losses++;
        } else if ((userGuess == 'u') && (computerGuess == 'u')) {
            wins++;
        } else if ((userGuess == 'u') && (computerGuess !== 'u')) {
            losses++;
        } else if ((userGuess == 'v') && (computerGuess == 'v')) {
            wins++;
        } else if ((userGuess == 'v') && (computerGuess !== 'v')) {
            losses++;
        } else if ((userGuess == 'w') && (computerGuess == 'w')) {
            wins++;
        } else if ((userGuess == 'w') && (computerGuess !== 'w')) {
            losses++;
        } else if ((userGuess == 'x') && (computerGuess == 'x')) {
            wins++;
        } else if ((userGuess == 'x') && (computerGuess !== 'x')) {
            losses++;
        } else if ((userGuess == 'y') && (computerGuess == 'y')) {
            wins++;
        } else if ((userGuess == 'y') && (computerGuess !== 'y')) {
            losses++;
        } else if ((userGuess == 'z') && (computerGuess == 'z')) {
            wins++;
        } else if ((userGuess == 'z') && (computerGuess !== 'z')) {
            losses++;
        }
        // if (guesses = 0) {
        //     losses++;
        // }
        // console.log(guesses)

        // Taking the tallies and displaying them in HTML
        var html =
            "<h3>Wins: " +
            wins +
            "</h3>" +
            "<h3>Losses: " +
            losses +
            "</h3>";
        
        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;

    }
}

