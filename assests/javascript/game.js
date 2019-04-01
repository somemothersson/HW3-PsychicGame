     
     
//Creat Loop and append Randmon Number to Variable
// $(document).ready(function () {
//declare variables for scoring
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = "";

    
//declare variables to hold reference points
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("gueses-left");
var yourGuessesText = document.getElementById("your-guesses");

//wire up event to caputre key pressed
document.onkeyup = function(event) {
    var userGuess = event.key
    // event.key = userGuess.push(event.key);
    // userGuess.push(event.key)
    // console.log(event.key)
    console.log("user guess ", userGuess, "I cant figure out how to store the choices")
    // for (var i = 0; i <10; i++){
    //     userGuess.push(i)
    // }
    if (userGuess == "j") {
        
        console.log("if");
        yourGuessesText.textContent = userGuess;
    }
    // } else {
   


    // }
    


    //What happens why I enter a letter
    //If the number of letters is less than 10, append another number
    //else if the number of letter is 10 or greater clear the letters and set losses to 1
    

    //create variable to coose random number from array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    console.log("Computer guess: " + computerGuess);

    // if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    //     if ((userGuess === "r" && computerGuess === "s") ||
    //       (userGuess === "s" && computerGuess === "p") || 
    //       (userGuess === "p" && computerGuess === "r")) {
    //       wins++;
    //     } else if (userGuess === computerGuess) {
    //       ties++;
    //     } else {
    //       losses++;
    //     }

        
        // Display the user guess guesses left, and wins/losses.
    //     yourGuessesText.textContent = userGuess;
    //     guessesLeftText.textContent = guessesLeft
    //     winsText.textContent =  wins;
    //     lossesText.textContent = losses;
      
    //   }
}