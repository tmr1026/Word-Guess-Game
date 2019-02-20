//create word bank
var wordBank= ["dunkaroos", "lunchables", "surge", "mortal kombat","nintendo","clueless","furby","spice girls","home alone"];
//choose random word from bank
var word= wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(word);
//show progress
var dashes = [];
for (var i = 0; i < word.length; i++) {
    dashes[i]= "_";
}
//take players guess
//check if guess matches random word
//track guessed letters
//track wins and losses

