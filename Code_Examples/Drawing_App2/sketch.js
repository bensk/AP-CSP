var fillColor = 'black'
var weight = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white')
    blue_button = createButton('Blue');
    blue_button.position(10, 10);
    blue_button.mousePressed(blueColor);
    black_button = createButton('Black');
    black_button.position(60, 10);
    black_button.mousePressed(blackColor);
    eraser = createButton('Eraser');
    eraser.position(115, 10);
    eraser.mousePressed(erase);
}

function draw() {
    console.log(fillColor)
    stroke(fillColor)
    strokeWeight(weight)
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }


}

function blueColor() {
    fillColor = 'blue'
	weight = 5;
}

function blackColor() {
    fillColor = 'black';
    weight = 5;
    // weight = 10
}

function erase() {
    fillColor = 'white'
    weight = 50
	
}

function changeColor(r, g, b) {
    fillColor = r, g, b
}
