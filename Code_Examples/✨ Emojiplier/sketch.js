var x;
var y;
var speed;
var slider;
var input;
var instructions;

function setup() {
    createCanvas(windowWidth, windowHeight);
    input = createInput("👇");
    input.position(windowWidth / 2 - 90, 110);
    slider = createSlider(32, height, height);
    slider.position(windowWidth / 2 - 90, 90)
    instructions = createElement('h1', '✨ Type an emoji!');



}

function draw() {
    background('white');
    textSize(12);

    text("↙then drag me", windowWidth / 2 + 50, 85);
    var emoji = input.value();
    var number = slider.value();
    textSize(32);
    for (var x = 1; x <= windowWidth; x += number) {
        for (var y = 32; y <= windowHeight; y += number) {
            text(emoji, x, y);
            instructions.position(x, y);
        }
    }
}