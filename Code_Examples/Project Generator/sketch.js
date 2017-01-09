function setup() {
    createCanvas(windowWidth, windowHeight);
    var nouns = ['monkey', 'rock', 'Turtle', 'Dubai', 'XBOX', 'Mom', 'chicken spot', 'Park', 'Phone', 'hamster ', 'Spain', 'Johan', 'book', 'scientist', 'Person', 'Car ', 'Musician'];
    var noun = random(nouns); // select random word
    var adjectives = ['Stupid', 'pretty', 'Fat', 'happy', 'Lovely', 'amazing', 'Smart', 'Scary', 'Huge', 'Amazing', 'funny', 'astonishing', 'Lazy', 'beautiful', 'pretty', 'Horrible', 'Beautiful', 'Cloudy', ]
    var adjective = random(adjectives);
    textSize(18);
    text("Your project is...", 0, 32);
    textAlign('center');
    textStyle('bold');
    textSize(48);
    text(adjective, windowWidth / 2, 48);
    text(noun, windowWidth / 2, 96);
}

function draw(){
}