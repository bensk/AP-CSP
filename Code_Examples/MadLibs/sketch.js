var place;
var adjecive;
var noun;
var button;
var v;
var a;
var n;
var paragraph

function setup() {
    createCanvas(windowWidth, windowHeight);
    place = createInput("Give me a place");
    place.position(10, 10);
    adjective = createInput("Give me an adjective");
    adjective.position(10, 40);
    noun = createInput("Give me a noun");
    noun.position(10, 70);
    button = createButton("MadLibs!");
    button.mousePressed(madlib);
    button.position(10, 100);


}

function draw() {
    background('white');
    p = place.value();
    a = adjective.value();
    n = noun.value();
    text(paragraph, 200, 200);
}

function madlib() {

    p = place.value();
    a = adjective.value();
    n = noun.value();

    paragraph = createP("One day, I was walking to the " + p + " and I saw a " + a + " " + n);
    paragraph.position(220, 0);

    // paragraph.remove()
    resetButton = createButton("Play again");
    resetButton.position(10, 100);
    resetButton.mousePressed(reset);


}

function reset() {
    paragraph.html("")
    resetButton.hide()
}