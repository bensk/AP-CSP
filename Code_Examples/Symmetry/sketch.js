function setup() {
	createCanvas(windowWidth, windowHeight);
	noCursor();
}

function draw() {
	noStroke();

	background('white');

	// original
	fill('#E32173')
	ellipse(mouseX, mouseY, 50, 50);
	// reflected over y axis
	fill('#7F1AE5')
	ellipse(windowWidth - mouseX, mouseY, 50, 50);
	// relfected over x axis
	fill('#00C9B6')
	ellipse(mouseX, windowHeight - mouseY, 50, 50);
	// reflected through the origin
	fill('#FEF790')
	ellipse(windowWidth - mouseX, windowHeight - mouseY, 50, 50);
	// for (x = mouseX; x <= windowWidth - mouseX; x += 50) {
	// 	ellipse(x, mouseY, 50, 50)
	// }
	// for (y = mouseY; y <= windowHeight - 50; y += 50) {
	// 	ellipse(mouseX, y, 50, 50);
	// }
}