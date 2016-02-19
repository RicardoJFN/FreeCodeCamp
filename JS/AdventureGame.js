document.write('I am ready to play');
var age = prompt("What's your age?");

if (age < 13) {
    document.write('You are allowed to play but i take no responsibility');
}else {
    document.write('Play on!');
}

document.write("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
document.write("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");
if (userAnswer === 'yes') {
    document.write("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
} else {
    document.write("Oh no! Bieber shakes his head and sings 'I set a pace so i can race without pacing.'"); 
}

var feedback = prompt("Rate the game out of 10");
if (feedback > 8) {
    document.write("Thank you! We should race at the next concert!);
} else {
    document.write("I'll keep practicing coding and racing.");
}