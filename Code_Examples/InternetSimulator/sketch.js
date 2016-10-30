var signal = 'red'
var message = ""

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('white')
	textSize(14)
	text(mouseX + " | " + mouseY, 40, 12);
	stroke(signal)
	strokeWeight(10)
	noCursor()
	line(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
	strokeWeight(1)
	stroke('black')
	ellipse(mouseX, mouseY, 50, 50);
	
	textAlign('center')
	text("Node 1", mouseX - 17, mouseY - 15, 40, 40);
	ellipse(windowWidth / 2, windowHeight / 2, 50, 50);
	text("Node 2", windowWidth / 2 -17, windowHeight / 2 - 15, 40, 40);
	// Change the wire color!
	if (mouseIsPressed) {
		signal = 'green'

	} else {
		signal = 'red'

	}
	textSize(32)
	
	text(signal, windowWidth/2, 200)
}