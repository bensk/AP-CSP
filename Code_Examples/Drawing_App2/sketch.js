var fillColor = 'black'
var weight = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('white')
	blue_button = createButton('Blue');
	blue_button.position(10, 10);
	blue_button.mousePressed(blueColor);
	black_button = createButton('Black');
	black_button.position(50,10);
	black_button.mousePressed(blackColor);
}

function draw() {
	stroke(fillColor)
	strokeWeight(weight)
	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY)
	}


}

function blueColor() {
	fillColor = 'blue'
}

function blackColor() {
	fillColor = 'black'
	weight = 10
}