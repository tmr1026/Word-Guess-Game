//create word bank
var wordBank= ["dunkaroos", "lunchables", "surge","nintendo","clueless","furby","spice girls","home alone"];
var word = "";
var lettersInWord = [];
var blanksAndSuccess=[];
var wrongLetters= [];
var amtBlanks= 0;

var wins = 0;
var losses= 0;
var guessesLeft = 6;

function game() {
    guessesLeft = 6;
    //choose random word from bank
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(word);
    lettersInWord = word.split("");
    amtBlanks = lettersInWord.length;
    blanksAndSuccess=[];
    wrongLetters=[]; 

    for (var i= 0; i < amtBlanks; i++) {
        blanksAndSuccess.push("_");
    }
console.log(blanksAndSuccess);
}
    
//check if guess appears in random word
function checkLetter(letter) {
    var validGuess= false;
    for (var i= 0; i < amtBlanks; i++)
        if(word[i] === letter) {
        validGuess = true;
        }
        
    if(validGuess){
        for (var j = 0; j < amtBlanks; j++){
            if (word[j] === letter) {
                blanksAndSuccess[j] = letter;
            }    
        }
    }
//track guessed letters
    else{
        wrongLetters.push(letter);
        console.log(wrongLetters);
        guessesLeft --;
    }
}    
function completeRound(){
    console.log("Wins: " + wins + " | Losses: " + losses + " | GuessesLeft: " + guessesLeft);
    
    document.getElementById("Guesses Left").innerHTML = guessesLeft;
    
    document.getElementById("hidden word").innerHTML = blanksAndSuccess.join(" ");
   
    document.getElementById("Wrong Guesses").innerHTML = wrongLetters.join(" ");

    if (blanksAndSuccess.toString() === lettersInWord.toString()) {  
        alert ("You win!");
        wins++;
        document.getElementById("Wins").innerHTML = wins;
        game();
    }
    else if (guessesLeft=== 0){
        alert("You Lose!");
        losses ++;
        document.getElementById('Losses').innerHTML = losses;
        game();
    }
}
game();
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.which).toLowerCase();
    checkLetter(userGuess);
    completeRound();
}

