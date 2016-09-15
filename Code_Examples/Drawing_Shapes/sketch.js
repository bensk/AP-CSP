function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background('white');
	fill('pink');
	rect(mouseX, mouseY, 40, 50);
	fill('blue');
	ellipse(100, 100, 25, 25);
	line(5, 5, mouseX, mouseY)

}

function windowResized() { // Let it redraw the window
	resizeCanvas(windowWidth, windowHeight);
}

