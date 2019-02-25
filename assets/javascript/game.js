//create word bank
var wordBank= ["dunkaroos", "lunchables", "surge", "mortal kombat","nintendo","clueless","furby","spice girls","home alone"];
//choose random word from bank
var word= wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(word);
//show progress
var dashes = [];
var wins = 0;
var losses= 0;
var wrongLetters= [];
var guessesLeft = 6;
var amtBlanks= word.length;
var rightGuesses= 0;
var docWins= document.getElementById('Wins')
var docLosses= document.getElementById('Losses')
var docWrongLetters = document.getElementById("Wrong Guesses")
var docWord= document.getElementById('hidden word')


function makeBlank(){
    for( var i=0; i < word.length; i++){
        dashes.push("_");
    }
    return dashes;
   
}
makeBlank();

//take players guess
document.onkeyup = function(event){
    var userGuess= event.key;
    console.log(userGuess);
//check if guess appears in random word
    if(word.indexOf(userGuess) != -1){
        for(var i= 0; i < word.length; i++)
        if(word[i] == userGuess)
        dashes[i] = word[i];
        rightGuesses++;
        console.log(dashes);
        docWord.append(dashes);

        if (rightGuesses == amtBlanks) { //change this at some point so user cant guess same letter and still win//
            alert ("You win!");
            wins++;
            console.log(wins);
            docWins.append(wins);
        }
    }
//track guessed letters
    else{
        wrongLetters.push(userGuess);
        console.log(wrongLetters);
        docWrongLetters= wrongLetters;
        guessesLeft --;
        if(guessesLeft=== 0){
            alert("You Lose!");
            losses ++;
            console.log(losses);
            docLosses.append(losses);
        }
    }
    
}



//track wins and losses

